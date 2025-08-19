#!/bin/bash

# Clean existing dist directories to avoid permission issues
rm -rf dist/frontend backend/dist

# Build frontend using Vite (from root directory since vite.config.js has root: "./frontend")
npm run build:frontend

# Copy frontend dist to backend
cp -r dist/frontend backend/dist

# Install dependencies for backend (using root package.json since backend uses workspaces)
echo "Frontend build completed successfully!"
echo "Backend dependencies are managed through the root package.json workspace."