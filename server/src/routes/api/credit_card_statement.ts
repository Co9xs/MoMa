import Router from 'express-promise-router';
import httpErrors from 'http-errors';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/credit_cards/:credit_card_id/statements', async (req, res) => {
  const currentUserId = req.session.auth0Id;

  if (currentUserId === undefined) {
    throw new httpErrors.Unauthorized();
  }

  const creditCard = await prisma.creditCard.findUnique({
    where: {
      id: Number(req.params.credit_card_id),
    },
  });

  if (creditCard === null) {
    throw new httpErrors.NotFound();
  }

  if (creditCard.ownerId !== currentUserId) {
    throw new httpErrors.Forbidden();
  }

  const statements = await prisma.creditCardStatement.findMany({
    where: {
      creditCardId: Number(req.params.credit_card_id),
    },
  });

  return res.status(200).type('applicatioin/json').send(statements);
});

router.post('/credit_cards/:credit_card_id/statements', async (req, res) => {
  const currentUserId = req.session.auth0Id;

  if (currentUserId === undefined) {
    throw new httpErrors.Unauthorized();
  }

  const creditCard = await prisma.creditCard.findUnique({
    where: {
      id: Number(req.params.credit_card_id),
    },
  });

  if (creditCard === null) {
    throw new httpErrors.NotFound();
  }

  if (creditCard.ownerId !== currentUserId) {
    throw new httpErrors.Forbidden();
  }

  const newStatement = await prisma.creditCardStatement.create({
    data: {
      date: req.body.date,
      name: req.body.name,
      price: req.body.price,
      creditCardId: creditCard.id,
    },
  });

  return res.status(200).type('application/json').send(newStatement);
});

router.patch('/credit_cards/:credit_card_id/statements/:statement_id', async (req, res) => {
  const currentUserId = req.session.auth0Id;

  if (currentUserId === undefined) {
    throw new httpErrors.Unauthorized();
  }

  const creditCard = await prisma.creditCard.findUnique({
    where: {
      id: Number(req.params.credit_card_id),
    },
  });

  if (creditCard === null) {
    throw new httpErrors.NotFound();
  }

  if (creditCard.ownerId !== currentUserId) {
    throw new httpErrors.Forbidden();
  }

  const statement = await prisma.creditCardStatement.findUnique({
    where: {
      id: Number(req.params.statement_id),
    },
  });

  if (statement === null) {
    throw new httpErrors.NotFound();
  }

  if (statement.creditCardId !== creditCard.id) {
    throw new httpErrors.Forbidden();
  }

  const updatedStatement = await prisma.creditCardStatement.update({
    where: {
      id: Number(req.params.statement_id),
    },
    data: {
      date: req.body.date,
      name: req.body.name,
      price: req.body.price,
      creditCardId: creditCard.id,
    },
  });

  return res.status(200).type('application/json').send(updatedStatement);
});

router.delete('/credit_cards/:credit_card_id/statements/:statement_id', async (req, res) => {
  const currentUserId = req.session.auth0Id;

  if (currentUserId === undefined) {
    throw new httpErrors.Unauthorized();
  }

  const creditCard = await prisma.creditCard.findUnique({
    where: {
      id: Number(req.params.credit_card_id),
    },
  });

  if (creditCard === null) {
    throw new httpErrors.NotFound();
  }

  if (creditCard.ownerId !== currentUserId) {
    throw new httpErrors.Forbidden();
  }

  const statement = await prisma.creditCardStatement.findUnique({
    where: {
      id: Number(req.params.statement_id),
    },
  });

  if (statement === null) {
    throw new httpErrors.NotFound();
  }

  if (statement.creditCardId !== creditCard.id) {
    throw new httpErrors.Forbidden();
  }

  await prisma.creditCardStatement.delete({
    where: {
      id: Number(req.params.statement_id),
    },
  });

  return res.status(200).type('application/json').send({});
});

export { router as creditCardStatementRouter };
