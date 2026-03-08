#!/bin/bash
cd "$(dirname "$0")"
echo "Running preparation scripts..."
yarn run rr-prepare
echo ""
echo "Starting Vite development server..."
echo "The app will open at http://localhost:3000"
echo ""
npx vite
