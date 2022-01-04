import Router from 'express-promise-router';
import httpErrors from 'http-errors';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/accounts/:account_id/statements', async (req, res) => {
  const currentUserId = Number(req.body.currentUser.id);

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

  const statements = await prisma.accountStatement.findMany({
    where: {
      accountId: Number(req.params.account_id),
    },
  });

  return res.status(200).type('applicatioin/json').send(statements);
});

router.post('/accounts/:account_id/statements', async (req, res) => {
  const currentUserId = Number(req.body.currentUser.id);

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

  const newStatement = await prisma.accountStatement.create({
    data: {
      date: req.body.date,
      name: req.body.name,
      price: req.body.price,
      accountId: account.id,
    },
  });

  return res.status(200).type('application/json').send(newStatement);
});

router.patch('/accounts/:account_id/statements/:statement_id', async (req, res) => {
  const currentUserId = Number(req.body.currentUser.id);

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

  const statement = await prisma.accountStatement.findUnique({
    where: {
      id: Number(req.params.statement_id),
    },
  });

  if (statement === null) {
    throw new httpErrors.NotFound();
  }

  if (statement.accountId !== account.id) {
    throw new httpErrors.Forbidden();
  }

  const updatedStatement = await prisma.accountStatement.update({
    where: {
      id: Number(req.params.statement_id),
    },
    data: {
      date: req.body.date,
      name: req.body.name,
      price: req.body.price,
      accountId: account.id,
    },
  });

  return res.status(200).type('application/json').send(updatedStatement);
});

router.delete('/accounts/:account_id/statements/:statement_id', async (req, res) => {
  const currentUserId = Number(req.body.currentUser.id);

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

  const statement = await prisma.accountStatement.findUnique({
    where: {
      id: Number(req.params.statement_id),
    },
  });

  if (statement === null) {
    throw new httpErrors.NotFound();
  }

  if (statement.accountId !== account.id) {
    throw new httpErrors.Forbidden();
  }

  await prisma.accountStatement.delete({
    where: {
      id: Number(req.params.statement_id),
    },
  });

  return res.status(200).type('application/json').send({});
});

export { router as accountStatementRouter };