#!/bin/bash

cd frontend
npm install
npm run build
rm -rf ../backend/dist
cp -r dist ../backend/dist