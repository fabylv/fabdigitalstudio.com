#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEPLOY_ENV_FILE="${DEPLOY_ENV_FILE:-.env.deploy}"

if [[ "$DEPLOY_ENV_FILE" != /* ]]; then
  DEPLOY_ENV_FILE="$ROOT_DIR/$DEPLOY_ENV_FILE"
fi

if [[ -f "$DEPLOY_ENV_FILE" ]]; then
  # shellcheck disable=SC1090
  source "$DEPLOY_ENV_FILE"
fi

: "${DEPLOY_HOST:?Set DEPLOY_HOST in .env.deploy}"
: "${DEPLOY_USER:?Set DEPLOY_USER in .env.deploy}"
: "${DEPLOY_APP_DIR:?Set DEPLOY_APP_DIR in .env.deploy}"

DEPLOY_PORT="${DEPLOY_PORT:-22}"
SKIP_REMOTE_INSTALL="${SKIP_REMOTE_INSTALL:-0}"
REMOTE_INSTALL_COMMAND="${REMOTE_INSTALL_COMMAND:-npm install --omit=dev}"
REMOTE_RESTART_COMMAND="${REMOTE_RESTART_COMMAND:-}"

if ! command -v rsync >/dev/null 2>&1; then
  echo "Error: rsync is required for deploy-prod." >&2
  exit 1
fi

if ! command -v ssh >/dev/null 2>&1; then
  echo "Error: ssh is required for deploy-prod." >&2
  exit 1
fi

SSH_CMD=(ssh -p "$DEPLOY_PORT")
if [[ -n "${SSH_KEY_PATH:-}" ]]; then
  SSH_CMD+=(-i "$SSH_KEY_PATH")
fi

RSYNC_RSH="${SSH_CMD[*]}"
REMOTE_TARGET="$DEPLOY_USER@$DEPLOY_HOST"

echo "==> Building production bundle"
cd "$ROOT_DIR"
npm run build

echo "==> Syncing runtime files to $REMOTE_TARGET:$DEPLOY_APP_DIR"
rsync -az --delete -e "$RSYNC_RSH" "$ROOT_DIR/dist/" "$REMOTE_TARGET:$DEPLOY_APP_DIR/dist/"
rsync -az --delete -e "$RSYNC_RSH" "$ROOT_DIR/server/" "$REMOTE_TARGET:$DEPLOY_APP_DIR/server/"
rsync -az -e "$RSYNC_RSH" "$ROOT_DIR/package.json" "$ROOT_DIR/package-lock.json" "$REMOTE_TARGET:$DEPLOY_APP_DIR/"

if [[ "$SKIP_REMOTE_INSTALL" == "1" ]]; then
  echo "==> SKIP_REMOTE_INSTALL=1, skipping remote npm install"
else
  echo "==> Installing production dependencies on the server"
  "${SSH_CMD[@]}" "$REMOTE_TARGET" "bash -lc 'cd "$DEPLOY_APP_DIR" && $REMOTE_INSTALL_COMMAND'"
fi

if [[ -n "$REMOTE_RESTART_COMMAND" ]]; then
  echo "==> Restarting remote app"
  "${SSH_CMD[@]}" "$REMOTE_TARGET" "bash -lc 'cd "$DEPLOY_APP_DIR" && $REMOTE_RESTART_COMMAND'"
else
  echo "==> No REMOTE_RESTART_COMMAND configured. Restart the app in Hostinger if needed."
fi

echo "==> Deploy complete"
