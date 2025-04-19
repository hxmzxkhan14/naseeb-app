#!/bin/bash

echo "🚀 Installing dependencies..."

npm install -g eas-cli

# Frontend dependencies
npm install react-navigation react-native-screens react-native-safe-area-context react-native-gesture-handler @react-navigation/native @react-navigation/native-stack
npm install nativewind react-native-vector-icons
npm install @reduxjs/toolkit react-redux

# Backend dependencies
npm install express cors dotenv bcrypt jsonwebtoken prisma @prisma/client
npm install --save-dev typescript ts-node @types/node


echo "🌱 Setting up environment variables..."
cat <<EOL > .env
PORT=3001
DATABASE_URL=postgresql://myuser:mypassword@localhost:5432/naseebapp
EOL

echo "🐳 Starting Docker containers..."
docker compose up -d

echo "🔄 Running Prisma migration..."
npx prisma generate
npx prisma migrate dev --name init

echo "✅ Done!"
