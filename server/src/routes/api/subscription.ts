import Router from 'express-promise-router';
import httpErrors from 'http-errors';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// TODO: implement check user id
router.get('/subscriptions', async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      auth0Id: req.body.auth0Id,
    },
  });

  if (user === null) {
    throw new httpErrors.NotFound();
  }

  const subscriptions = await prisma.subscription.findMany({
    where: {
      subscriberId: user.id,
    },
  });

  return res.status(200).type('applicatioin/json').send(subscriptions);
});

router.post('/subscriptions', async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      auth0Id: req.body.auth0Id,
    },
  });

  if (user === null) {
    throw new httpErrors.NotFound();
  }

  const subscription = await prisma.subscription.create({
    data: {
      name: req.body.name,
      price: req.body.price,
      subscriberId: user.id,
    },
  });

  return res.status(200).type('application/json').send(subscription);
});

router.patch('/subscriptions/:subscription_id', async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      auth0Id: req.body.auth0Id,
    },
  });

  if (user === null) {
    throw new httpErrors.NotFound();
  }

  const subscription = await prisma.subscription.update({
    where: {
      id: Number(req.params.subscription_id),
    },
    data: {
      name: req.body.name,
      price: req.body.price,
    },
  });

  if (subscription === null) {
    throw new httpErrors.NotFound();
  }

  return res.status(200).type('application/json').send(subscription);
});

router.delete('/subscriptions/:subscription_id', async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      auth0Id: req.body.auth0Id,
    },
  });

  if (user === null) {
    throw new httpErrors.NotFound();
  }

  const subscription = await prisma.subscription.delete({
    where: {
      id: Number(req.params.subscription_id),
    },
  });

  if (subscription === null) {
    throw new httpErrors.NotFound();
  }

  return res.status(200).type('application/json').send({});
});

export { router as subscriptionRouter };
