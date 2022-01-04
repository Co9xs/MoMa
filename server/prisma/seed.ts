import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function insertSeed() {
  await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      auth0Id: 'auth0Id|user1',
    },
  });
  await prisma.user.upsert({
    where: { id: 2 },
    update: {},
    create: {
      auth0Id: 'auth0Id|user2',
    },
  });

  await prisma.subscription.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'YouTube Premium',
      price: 1180,
      subscriberId: 1,
    },
  });
  await prisma.subscription.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'Amazon Prime',
      price: 250,
      subscriberId: 1,
    },
  });
  await prisma.subscription.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: 'X server',
      price: 1550,
      subscriberId: 2,
    },
  });

  await prisma.creditCard.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: '楽天カード',
      budget: 50000,
      ownerId: 1,
    },
  });
  await prisma.creditCard.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: '三井住友カード',
      budget: 20000,
      ownerId: 2,
    },
  });

  await prisma.creditCardStatement.upsert({
    where: { id: 1 },
    update: {},
    create: {
      date: new Date('2021/12/26'),
      name: 'Amazonで買い物',
      price: 2600,
      creditCardId: 1,
    },
  });
  await prisma.creditCardStatement.upsert({
    where: { id: 2 },
    update: {},
    create: {
      date: new Date('2021/12/31'),
      name: 'サウナ',
      price: 1300,
      creditCardId: 1,
    },
  });
  await prisma.creditCardStatement.upsert({
    where: { id: 3 },
    update: {},
    create: {
      date: new Date('2021/11/20'),
      name: 'コンビニ',
      price: 1100,
      creditCardId: 2,
    },
  });

  await prisma.account.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: '楽天銀行',
      balance: 100000,
      ownerId: 1,
    },
  });

  await prisma.account.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'ゆうちょ銀行',
      balance: 50000,
      ownerId: 2,
    },
  });

  await prisma.accountStatement.upsert({
    where: { id: 1 },
    update: {},
    create: {
      date: new Date('2021/11/30'),
      name: 'クレカ10月分',
      price: 52300,
      accountId: 1,
    },
  });
  await prisma.accountStatement.upsert({
    where: { id: 2 },
    update: {},
    create: {
      date: new Date('2021/11/30'),
      name: 'クレカ 課金',
      price: 3000,
      accountId: 1,
    },
  });
  await prisma.accountStatement.upsert({
    where: { id: 3 },
    update: {},
    create: {
      date: new Date('2021/11/30'),
      name: 'スノボ',
      price: 7500,
      accountId: 2,
    },
  });
}

insertSeed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
