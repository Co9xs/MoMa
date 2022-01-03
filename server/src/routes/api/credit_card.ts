import Router from 'express-promise-router';
import httpErrors from 'http-errors';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// TODO: implement check user id
router.get('/credit_cards', async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      auth0Id: req.body.auth0Id,
    },
  });

  if (user === null) {
    throw new httpErrors.NotFound();
  }

  const creditCards = await prisma.creditCard.findMany({
    where: {
      ownerId: user.id,
    },
  });

  return res.status(200).type('applicatioin/json').send(creditCards);
});

router.post('/credit_cards', async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      auth0Id: req.body.auth0Id,
    },
  });

  if (user === null) {
    throw new httpErrors.NotFound();
  }

  const creditCard = await prisma.creditCard.create({
    data: {
      name: req.body.name,
      budget: req.body.budget,
      ownerId: user.id,
    },
  });

  return res.status(200).type('application/json').send(creditCard);
});

router.patch('/credit_cards/:credit_card_id', async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      auth0Id: req.body.auth0Id,
    },
  });

  if (user === null) {
    throw new httpErrors.NotFound();
  }

  const creditCard = await prisma.creditCard.update({
    where: {
      id: Number(req.params.credit_card_id),
    },
    data: {
      name: req.body.name,
      budget: req.body.budget,
    },
  });

  if (creditCard === null) {
    throw new httpErrors.NotFound();
  }

  return res.status(200).type('application/json').send(creditCard);
});

router.delete('/credit_cards/:credit_card_id', async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      auth0Id: req.body.auth0Id,
    },
  });

  if (user === null) {
    throw new httpErrors.NotFound();
  }

  const creditCard = await prisma.creditCard.delete({
    where: {
      id: Number(req.params.credit_card_id),
    },
  });

  if (creditCard === null) {
    throw new httpErrors.NotFound();
  }

  return res.status(200).type('application/json').send({});
});

export { router as creditCardRouter };
