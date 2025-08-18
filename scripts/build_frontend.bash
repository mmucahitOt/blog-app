#!/bin/bash

# Clean existing dist directories to avoid permission issues
rm -rf frontend/dist backend/dist

npm run build:frontend
cp -r frontend/dist backend/dist

cd backend
npm install