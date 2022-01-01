import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const allUser = await prisma.user.findMany();
  console.log(allUser);
}

main()
  .catch((err) => {
    throw err;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
