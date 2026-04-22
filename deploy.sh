#!/usr/bin/env bash
set -euo pipefail

ENVIRONMENT="${1:-prod}"

case "$ENVIRONMENT" in
  prod)
    export DEPLOY_ENV_FILE=".env.deploy"
    ;;
  dev)
    export DEPLOY_ENV_FILE=".env.deploy.dev"
    ;;
  *)
    echo "✖ Invalid environment: $ENVIRONMENT (use prod or dev)" >&2
    exit 1
    ;;
esac

exec bash "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/scripts/deploy-prod.sh"
