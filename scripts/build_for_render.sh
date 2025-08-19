#!/bin/bash

# Exit on any error
set -e

echo "Starting Render build process..."

# Clean existing dist directories to avoid permission issues
echo "Cleaning dist directories..."
rm -rf dist/frontend backend/dist

# Install dependencies
echo "Installing dependencies..."
npm install

# Build frontend
echo "Building frontend..."
npm run build:frontend

# Copy frontend dist to backend
echo "Copying frontend build to backend..."
cp -r dist/frontend backend/dist

echo "Render build completed successfully!" 