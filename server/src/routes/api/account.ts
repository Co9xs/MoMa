/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import Router from 'express-promise-router';
import httpErrors from 'http-errors';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/accounts', async (req, res) => {
  const currentUserId = req.session.auth0Id;

  if (currentUserId === undefined) {
    throw new httpErrors.Unauthorized();
  }

  const account = await prisma.account.findMany({
    where: {
      ownerId: currentUserId,
    },
  });

  return res.status(200).type('applicatioin/json').send(account);
});

router.post('/accounts', async (req, res) => {
  const currentUserId = req.session.auth0Id;

  if (currentUserId === undefined) {
    throw new httpErrors.Unauthorized();
  }

  const newAccount = await prisma.account.create({
    data: {
      name: req.body.name,
      balance: req.body.balance,
      ownerId: currentUserId,
    },
  });

  return res.status(200).type('application/json').send(newAccount);
});

router.patch('/accounts/:account_id', async (req, res) => {
  const currentUserId = req.session.auth0Id;

  if (currentUserId === undefined) {
    throw new httpErrors.Unauthorized();
  }

  const account = await prisma.account.findUnique({
    where: {
      id: Number(req.params.account_id),
    },
  });

  if (account === null) {
    throw new httpErrors.NotFound();
  }

  if (account.ownerId !== currentUserId) {
    throw new httpErrors.Forbidden();
  }

  const updatedAccount = await prisma.account.update({
    where: {
      id: Number(req.params.account_id),
    },
    data: {
      name: req.body.name,
      balance: req.body.balance,
    },
  });

  return res.status(200).type('application/json').send(updatedAccount);
});

router.delete('/accounts/:account_id', async (req, res) => {
  const currentUserId = req.session.auth0Id;

  if (currentUserId === undefined) {
    throw new httpErrors.Unauthorized();
  }

  const account = await prisma.account.findUnique({
    where: {
      id: Number(req.params.account_id),
    },
  });

  if (account === null) {
    throw new httpErrors.NotFound();
  }

  if (account.ownerId !== currentUserId) {
    throw new httpErrors.Forbidden();
  }

  await prisma.account.delete({
    where: {
      id: Number(req.params.account_id),
    },
  });

  return res.status(200).type('application/json').send({});
});

export { router as accountRouter };
