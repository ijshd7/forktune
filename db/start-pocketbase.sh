#!/bin/bash

# Load env vars
if [ -f .env ]; then
  export $(cat .env | xargs)
fi

# Check required variables
if [[ -z "$PB_SUPERUSER_EMAIL" || -z "$PB_SUPERUSER_PASSWORD" ]]; then
  echo "ERROR: PB_SUPERUSER_EMAIL and PB_SUPERUSER_PASSWORD must be set."
  exit 1
fi

PB_PORT=${PB_PORT:-8090}

# Upsert superuser via CLI
echo "🛠️  Upserting superuser via CLI..."
./pocketbase superuser upsert "$PB_SUPERUSER_EMAIL" "$PB_SUPERUSER_PASSWORD"

# Build the serve command
SERVE_CMD="./pocketbase serve --http=\"0.0.0.0:$PB_PORT\""

# Add encryption key if present
if [[ -n "$PB_ENCRYPTION_KEY" ]]; then
  echo "🔐 Serving with database encryption enabled."
  SERVE_CMD="$SERVE_CMD --encryptionEnv=\"$PB_ENCRYPTION_KEY\""
fi

# Now start the server
echo "🚀 Starting PocketBase on port $PB_PORT..."
eval $SERVE_CMD