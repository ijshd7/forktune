#!/bin/bash

# Run download script
echo "📥 Running download-pocketbase.sh..."
./download-pocketbase.sh

# Check if the download was successful (optional but recommended)
if [ ! -f ./pocketbase ]; then
  echo "❌ Failed to download PocketBase. Aborting."
  exit 1
fi

# Run start script
echo "🚀 Running start-pocketbase.sh..."
./start-pocketbase.sh
