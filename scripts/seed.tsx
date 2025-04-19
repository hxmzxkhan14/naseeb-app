// scripts/seed.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      { email: 'alice@test.com', password: 'alice123' },
      { email: 'bob@test.com', password: 'bob123' },
    ],
  });

  console.log('Seeded test users 🚀');
}

main().finally(() => prisma.$disconnect());
