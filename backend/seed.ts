import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Deleting existing users...');
  await prisma.user.deleteMany();
  console.log('Deleted.');

  console.log('Seeding new users...');
  await prisma.user.createMany({
    data: [
      {
        email: 'alice@test.com',
        password: 'alice123',
        firstName: 'Alice',
        lastName: 'Smith',
        pfpurl: 'https://example.com/alice.jpg',
        age: 28,
        gender: 'female',
        phone: '1234567890',
        bio: 'Loves hiking and good coffee.',
        location: 'San Francisco',
      },
      {
        email: 'bob@test.com',
        password: 'bob123',
        firstName: 'Bob',
        lastName: 'Jones',
        pfpurl: 'https://example.com/bob.jpg',
        age: 30,
        gender: 'male',
        phone: '9876543210',
        bio: 'Tech nerd who cooks great pasta.',
        location: 'New York',
      },
      {
        email: 'carla@test.com',
        password: 'carla123',
        firstName: 'Carla',
        lastName: 'Gomez',
        pfpurl: 'https://example.com/carla.jpg',
        age: 26,
        gender: 'female',
        phone: '5551237890',
        bio: 'Dog lover and yoga instructor.',
        location: 'Los Angeles',
      },
      {
        email: 'david@test.com',
        password: 'david123',
        firstName: 'David',
        lastName: 'Lee',
        pfpurl: 'https://example.com/david.jpg',
        age: 30,
        gender: 'male',
        phone: '4445556666',
        bio: 'Entrepreneur and travel junkie.',
        location: 'Seattle',
      },
      {
        email: 'emily@test.com',
        password: 'emily123',
        firstName: 'Emily',
        lastName: 'Nguyen',
        pfpurl: 'https://example.com/emily.jpg',
        age: 29,
        gender: 'female',
        phone: '3216549870',
        bio: 'Artist and avid reader.',
        location: 'Chicago',
      },
      {
        email: 'farhan@test.com',
        password: 'farhan123',
        firstName: 'Farhan',
        lastName: 'Ali',
        pfpurl: 'https://example.com/farhan.jpg',
        age: 27,
        gender: 'male',
        phone: '2123456789',
        bio: 'Soccer fan and coffee connoisseur.',
        location: 'Houston',
      }
    ],
  });

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
