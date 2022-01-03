import Router from 'express-promise-router';
import httpErrors from 'http-errors';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// TODO: implement check user id
router.get('/accounts', async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      auth0Id: req.body.auth0Id,
    },
  });

  if (user === null) {
    throw new httpErrors.NotFound();
  }

  const account = await prisma.account.findMany({
    where: {
      ownerId: user.id,
    },
  });

  return res.status(200).type('applicatioin/json').send(account);
});

router.post('/accounts', async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      auth0Id: req.body.auth0Id,
    },
  });

  if (user === null) {
    throw new httpErrors.NotFound();
  }

  const account = await prisma.account.create({
    data: {
      name: req.body.name,
      balance: req.body.balance,
      ownerId: user.id,
    },
  });

  return res.status(200).type('application/json').send(account);
});

router.patch('/accounts/:account_id', async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      auth0Id: req.body.auth0Id,
    },
  });

  if (user === null) {
    throw new httpErrors.NotFound();
  }

  const account = await prisma.account.update({
    where: {
      id: Number(req.params.account_id),
    },
    data: {
      name: req.body.name,
      balance: req.body.balance,
    },
  });

  if (account === null) {
    throw new httpErrors.NotFound();
  }

  return res.status(200).type('application/json').send(account);
});

router.delete('/accounts/:account_id', async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      auth0Id: req.body.auth0Id,
    },
  });

  if (user === null) {
    throw new httpErrors.NotFound();
  }

  const account = await prisma.account.delete({
    where: {
      id: Number(req.params.account_id),
    },
  });

  if (account === null) {
    throw new httpErrors.NotFound();
  }

  return res.status(200).type('application/json').send({});
});

export { router as accountRouter };
