/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import Router from 'express-promise-router';
import httpErrors from 'http-errors';
import { PrismaClient } from '@prisma/client';
import { checkJwt } from '../../middlewares/checkJwt';

const router = Router();
const prisma = new PrismaClient();

router.use(checkJwt);
router.get('/credit_cards', async (req, res) => {
  const currentUserId = req.session.auth0Id;

  if (currentUserId === undefined) {
    throw new httpErrors.Unauthorized();
  }

  const creditCards = await prisma.creditCard.findMany({
    where: {
      ownerId: currentUserId,
    },
  });

  return res.status(200).type('applicatioin/json').send(creditCards);
});

router.post('/credit_cards', async (req, res) => {
  const currentUserId = req.session.auth0Id;

  if (currentUserId === undefined) {
    throw new httpErrors.Unauthorized();
  }

  const newCreditCard = await prisma.creditCard.create({
    data: {
      name: req.body.name,
      budget: req.body.budget,
      ownerId: currentUserId,
    },
  });

  return res.status(200).type('application/json').send(newCreditCard);
});

router.patch('/credit_cards/:credit_card_id', async (req, res) => {
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

  const updatedCreditCard = await prisma.creditCard.update({
    where: {
      id: Number(req.params.credit_card_id),
    },
    data: {
      name: req.body.name,
      budget: req.body.budget,
    },
  });

  return res.status(200).type('application/json').send(updatedCreditCard);
});

router.delete('/credit_cards/:credit_card_id', async (req, res) => {
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

  await prisma.creditCard.delete({
    where: {
      id: Number(req.params.credit_card_id),
    },
  });

  return res.status(200).type('application/json').send({});
});

export { router as creditCardRouter };
