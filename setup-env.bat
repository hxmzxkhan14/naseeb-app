@echo off
echo 🚀 Installing dependencies...

:: Install global eas-cli
npm install -g eas-cli

:: Install frontend dependencies
call npm install react-navigation react-native-screens react-native-safe-area-context react-native-gesture-handler @react-navigation/native @react-navigation/native-stack
call npm install nativewind react-native-vector-icons
call npm install @reduxjs/toolkit react-redux

:: Install backend dependencies
call npm install express cors dotenv bcrypt jsonwebtoken prisma @prisma/client

:: Create .env file
echo 🌱 Setting up environment variables...
echo PORT=3001> .env
echo DATABASE_URL=postgresql://myuser:mypassword@localhost:5432/naseebapp>> .env

:: Start Docker containers
echo 🐳 Starting Docker containers...
docker compose up -d

:: Run Prisma migration
echo 🔄 Running Prisma migration...
npx prisma generate
npx prisma migrate dev --name init

echo ✅ Done!
pause
