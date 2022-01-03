import Router from 'express-promise-router';
import httpErrors from 'http-errors';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// TODO: implement check user id
router.get('/credit_cards/:credit_card_id/statements', async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      auth0Id: req.body.auth0Id,
    },
  });

  if (user === null) {
    throw new httpErrors.NotFound();
  }

  const creditCard = await prisma.creditCard.findUnique({
    where: {
      id: Number(req.params.credit_card_id),
    },
  });

  if (creditCard === null) {
    throw new httpErrors.NotFound();
  }

  const statements = await prisma.creditCardStatement.findMany({
    where: {
      creditCardId: Number(req.params.credit_card_id),
    },
  });

  return res.status(200).type('applicatioin/json').send(statements);
});

router.post('/credit_cards/:credit_card_id/statements', async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      auth0Id: req.body.auth0Id,
    },
  });

  if (user === null) {
    throw new httpErrors.NotFound();
  }

  const creditCard = await prisma.creditCard.findUnique({
    where: {
      id: Number(req.params.credit_card_id),
    },
  });

  if (creditCard === null) {
    throw new httpErrors.NotFound();
  }

  const statement = await prisma.creditCardStatement.create({
    data: {
      date: req.body.date,
      name: req.body.name,
      price: req.body.price,
      creditCardId: creditCard.id,
    },
  });

  return res.status(200).type('application/json').send(statement);
});

router.patch('/credit_cards/:credit_card_id/statements/:statement_id', async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      auth0Id: req.body.auth0Id,
    },
  });

  if (user === null) {
    throw new httpErrors.NotFound();
  }

  const creditCard = await prisma.creditCard.findUnique({
    where: {
      id: Number(req.params.credit_card_id),
    },
  });

  if (creditCard === null) {
    throw new httpErrors.NotFound();
  }

  const statement = await prisma.creditCardStatement.update({
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

  if (statement === null) {
    throw new httpErrors.NotFound();
  }

  return res.status(200).type('application/json').send(statement);
});

router.delete('/credit_cards/:credit_card_id/statements/:statement_id', async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      auth0Id: req.body.auth0Id,
    },
  });

  if (user === null) {
    throw new httpErrors.NotFound();
  }

  const creditCard = await prisma.creditCard.findUnique({
    where: {
      id: Number(req.params.credit_card_id),
    },
  });

  if (creditCard === null) {
    throw new httpErrors.NotFound();
  }

  const statement = await prisma.creditCardStatement.delete({
    where: {
      id: Number(req.params.statement_id),
    },
  });

  if (statement === null) {
    throw new httpErrors.NotFound();
  }

  return res.status(200).type('application/json').send({});
});

export { router as creditCardRouter };
