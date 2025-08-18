#!/bin/bash

# Exit on any error
set -e

echo "Starting Render build process..."

# Clean existing dist directories to avoid permission issues
echo "Cleaning dist directories..."
rm -rf frontend/dist backend/dist

# install dependencies
npm install

echo "Render build completed successfully!" 