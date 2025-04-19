import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
prisma.$connect()
  .then(() => {
    console.log('Connection successful!');
    prisma.$disconnect();
  })
  .catch((e: unknown) => {
    console.error('Connection failed:', e);
  });
