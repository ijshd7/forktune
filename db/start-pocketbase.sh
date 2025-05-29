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

# Now start the server
echo "🚀 Starting PocketBase on port $PB_PORT..."
./pocketbase serve --http="0.0.0.0:$PB_PORT"
