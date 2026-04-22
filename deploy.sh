#!/usr/bin/env bash
set -Eeuo pipefail

ENV="${1:-prod}"
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
GLOBAL_ENV_FILE="${GLOBAL_ENV_FILE:-$HOME/.openclaw/secrets/faby.env}"
DEPLOY_ENV_FILE="$ROOT_DIR/.env.deploy"

# -----------------------------------------------------------------------------
# LOAD BASE ENV
# -----------------------------------------------------------------------------
if [[ -f "$GLOBAL_ENV_FILE" ]]; then
  # shellcheck disable=SC1090
  set -a
  source "$GLOBAL_ENV_FILE"
  set +a
fi

if [[ -f "$DEPLOY_ENV_FILE" ]]; then
  # shellcheck disable=SC1090
  set -a
  source "$DEPLOY_ENV_FILE"
  set +a
fi

# -----------------------------------------------------------------------------
# SWITCH ENV
# -----------------------------------------------------------------------------
case "$ENV" in
  prod)
    REMOTE_DIR="${PROD_REMOTE_DIR:-${DEPLOY_APP_DIR:-${HZ_FABDIGITAL_PROD_REMOTE_DIR:-}}}"
    SITE_URL="${PROD_SITE_URL:-${HZ_FABDIGITAL_PROD_SITE_URL:-https://www.fabdigitalstudio.com}}"
    ;;
  dev)
    REMOTE_DIR="${DEV_REMOTE_DIR:-${DEPLOY_APP_DIR_DEV:-${HZ_FABDIGITAL_DEV_REMOTE_DIR:-}}}"
    SITE_URL="${DEV_SITE_URL:-${HZ_FABDIGITAL_DEV_SITE_URL:-https://dev.fabdigitalstudio.com}}"
    ;;
  *)
    echo "✖ Invalid environment: $ENV (use prod or dev)" >&2
    exit 1
    ;;
esac

# -----------------------------------------------------------------------------
# CONFIG
# -----------------------------------------------------------------------------
SSH_HOST="${SSH_HOST:-${DEPLOY_HOST:-${HZ_SSH_HOST:-}}}"
SSH_USER="${SSH_USER:-${DEPLOY_USER:-${HZ_SSH_USER:-}}}"
LOCAL_DIST="${LOCAL_DIST:-${HZ_LOCAL_DIST:-dist}}"
SSH_KEY="${SSH_KEY:-${SSH_KEY_PATH:-${HZ_SSH_KEY:-}}}"
SSH_PORT="${SSH_PORT:-${DEPLOY_PORT:-${HZ_SSH_PORT:-22}}}"
SKIP_REMOTE_INSTALL="${SKIP_REMOTE_INSTALL:-${HZ_SKIP_REMOTE_INSTALL:-0}}"
REMOTE_INSTALL_COMMAND="${REMOTE_INSTALL_COMMAND:-${HZ_REMOTE_INSTALL_COMMAND:-npm install --omit=dev}}"
REMOTE_RESTART_COMMAND="${REMOTE_RESTART_COMMAND:-${HZ_REMOTE_RESTART_COMMAND:-}}"

LOCAL_DIST="${LOCAL_DIST%/}"
REMOTE_DIR="${REMOTE_DIR%/}"

# -----------------------------------------------------------------------------
# COLORS
# -----------------------------------------------------------------------------
GREEN="\033[0;32m"
YELLOW="\033[1;33m"
RED="\033[0;31m"
NC="\033[0m"

log() { echo -e "${GREEN}▶ $*${NC}"; }
die() { echo -e "${RED}✖ $*${NC}" >&2; exit 1; }

# -----------------------------------------------------------------------------
# CHECKS
# -----------------------------------------------------------------------------
command -v npm >/dev/null 2>&1 || die "npm is not installed."
command -v rsync >/dev/null 2>&1 || die "rsync is not installed."
command -v ssh >/dev/null 2>&1 || die "ssh is not installed."

[[ -n "$SSH_HOST" ]] || die "SSH_HOST is not set in faby.env or .env.deploy"
[[ -n "$SSH_USER" ]] || die "SSH_USER is not set in faby.env or .env.deploy"
[[ -n "$REMOTE_DIR" ]] || die "REMOTE_DIR is not set for $ENV in faby.env or .env.deploy"

# Expand ~ in SSH key
if [[ -n "$SSH_KEY" && "$SSH_KEY" == ~* ]]; then
  SSH_KEY="${HOME}${SSH_KEY:1}"
fi

# -----------------------------------------------------------------------------
# BUILD
# -----------------------------------------------------------------------------
log "Deploying to: $ENV"
log "Building..."
cd "$ROOT_DIR"
npm run build

[[ -d "$LOCAL_DIST" ]] || die "Build failed, '$LOCAL_DIST' not found."

# -----------------------------------------------------------------------------
# SSH OPTIONS
# -----------------------------------------------------------------------------
SSH_OPTS=(-p "$SSH_PORT")
if [[ -n "$SSH_KEY" ]]; then
  SSH_OPTS+=(-i "$SSH_KEY")
fi

# Ensure remote dir exists
ssh "${SSH_OPTS[@]}" "$SSH_USER@$SSH_HOST" "mkdir -p '$REMOTE_DIR'"

# -----------------------------------------------------------------------------
# DEPLOY
# -----------------------------------------------------------------------------
log "Syncing files..."
rsync -az --delete -e "ssh ${SSH_OPTS[*]}" "$LOCAL_DIST/" "$SSH_USER@$SSH_HOST:$REMOTE_DIR/dist/"
rsync -az --delete -e "ssh ${SSH_OPTS[*]}" "$ROOT_DIR/server/" "$SSH_USER@$SSH_HOST:$REMOTE_DIR/server/"
rsync -az -e "ssh ${SSH_OPTS[*]}" "$ROOT_DIR/package.json" "$ROOT_DIR/package-lock.json" "$SSH_USER@$SSH_HOST:$REMOTE_DIR/"

if [[ "$SKIP_REMOTE_INSTALL" == "1" ]]; then
  log "SKIP_REMOTE_INSTALL=1, skipping remote npm install"
else
  log "Installing production dependencies on the server"
  ssh "${SSH_OPTS[@]}" "$SSH_USER@$SSH_HOST" "bash -lc 'cd \"$REMOTE_DIR\" && $REMOTE_INSTALL_COMMAND'"
fi

if [[ -n "$REMOTE_RESTART_COMMAND" ]]; then
  log "Restarting remote app"
  ssh "${SSH_OPTS[@]}" "$SSH_USER@$SSH_HOST" "bash -lc 'cd \"$REMOTE_DIR\" && $REMOTE_RESTART_COMMAND'"
else
  log "No REMOTE_RESTART_COMMAND configured. Restart the app in Hostinger if needed."
fi

# -----------------------------------------------------------------------------
# DONE
# -----------------------------------------------------------------------------
echo ""
log "✅ $ENV deployment complete!"
echo -e "${YELLOW}Visit: $SITE_URL${NC}"
echo ""
