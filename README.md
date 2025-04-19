# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

## Directions on setting up Prisma and test database

There is an automated installation file **(@/setup-env.sh)** which should be run in order to setup the project and Prisma on your machine

Run these commands in the root of the project folder in the terminal. (Windows users can use Git Bash to run them)

1. Allow the shell file permission to run

```bash
# inside root folder
chmod +x setup-env.sh
```

2. Run the shell file

```bash
/setup-env.sh
```

3. Populating database with mock data

```bash
# inside backend folder
cd backend
npx ts-node seed.ts
```

4. Accessing database using Prisma Studio

```bash
npx prisma studio
```