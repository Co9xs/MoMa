import Router from 'express-promise-router';
import httpErrors from 'http-errors';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/subscriptions', async (req, res) => {
  const currentUserId = req.session.userId;

  if (currentUserId === undefined) {
    throw new httpErrors.BadRequest();
  }

  const subscriptions = await prisma.subscription.findMany({
    where: {
      subscriberId: currentUserId,
    },
  });

  return res.status(200).type('applicatioin/json').send(subscriptions);
});

router.post('/subscriptions', async (req, res) => {
  const currentUserId = req.session.userId;

  if (currentUserId === undefined) {
    throw new httpErrors.BadRequest();
  }

  const subscription = await prisma.subscription.create({
    data: {
      name: req.body.name,
      price: req.body.price,
      subscriberId: currentUserId,
    },
  });

  return res.status(200).type('application/json').send(subscription);
});

router.patch('/subscriptions/:subscription_id', async (req, res) => {
  const currentUserId = req.session.userId;

  if (currentUserId === undefined) {
    throw new httpErrors.BadRequest();
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

  return res.status(200).type('application/json').send(subscription);
});

router.delete('/subscriptions/:subscription_id', async (req, res) => {
  const currentUserId = req.session.userId;

  if (currentUserId === undefined) {
    throw new httpErrors.BadRequest();
  }

  await prisma.subscription.delete({
    where: {
      id: Number(req.params.subscription_id),
    },
  });

  return res.status(200).type('application/json').send({});
});

export { router as subscriptionRouter };
