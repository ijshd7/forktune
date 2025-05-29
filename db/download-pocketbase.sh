#!/bin/bash

PB_VERSION=${1:-0.28.2}

OS=$(uname | tr '[:upper:]' '[:lower:]')
ARCH=$(uname -m)

if [[ "$OS" == "darwin" ]]; then
    OS="darwin"
    if [[ "$ARCH" == "arm64" ]]; then
        ARCH="arm64"
    else
        ARCH="amd64"
    fi
elif [[ "$OS" == "linux" ]]; then
    if [[ "$ARCH" == "x86_64" ]]; then
        ARCH="amd64"
    fi
else
    echo "❌ Unsupported OS: $OS"
    exit 1
fi

PB_URL="https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_${OS}_${ARCH}.zip"

echo "📦 Downloading PocketBase from: $PB_URL"
curl -L -o pb.zip "$PB_URL" || { echo "❌ Download failed"; exit 1; }

mkdir -p dest
unzip pb.zip -d dest || { echo "❌ Unzip failed"; rm -rf dest pb.zip; exit 1; }

mv dest/pocketbase ./pocketbase || { echo "❌ Move failed"; exit 1; }
chmod +x ./pocketbase
rm -rf dest pb.zip

echo "✅ PocketBase v${PB_VERSION} downloaded and extracted to ./pocketbase"
