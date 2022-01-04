import Router from 'express-promise-router';
import httpErrors from 'http-errors';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/subscriptions', async (req, res) => {
  const currentUserId = Number(req.body.currentUser.id);

  const subscriptions = await prisma.subscription.findMany({
    where: {
      subscriberId: currentUserId,
    },
  });

  return res.status(200).type('applicatioin/json').send(subscriptions);
});

router.post('/subscriptions', async (req, res) => {
  const currentUserId = Number(req.body.currentUser.id);

  const newSubscription = await prisma.subscription.create({
    data: {
      name: req.body.name,
      price: req.body.price,
      subscriberId: currentUserId,
    },
  });

  return res.status(200).type('application/json').send(newSubscription);
});

router.patch('/subscriptions/:subscription_id', async (req, res) => {
  const currentUserId = Number(req.body.currentUser.id);

  const subscription = await prisma.subscription.findUnique({
    where: {
      id: Number(req.params.subscription_id),
    },
  });

  if (subscription === null) {
    throw new httpErrors.NotFound();
  }

  if (subscription.subscriberId !== currentUserId) {
    throw new httpErrors.Forbidden();
  }

  const updatedSubscription = await prisma.subscription.update({
    where: {
      id: Number(req.params.subscription_id),
    },
    data: {
      name: req.body.name,
      price: req.body.price,
    },
  });

  return res.status(200).type('application/json').send(updatedSubscription);
});

router.delete('/subscriptions/:subscription_id', async (req, res) => {
  const currentUserId = Number(req.body.currentUser.id);

  const subscription = await prisma.subscription.findUnique({
    where: {
      id: Number(req.params.subscription_id),
    },
  });

  if (subscription === null) {
    throw new httpErrors.NotFound();
  }

  if (subscription.subscriberId !== currentUserId) {
    throw new httpErrors.Forbidden();
  }

  await prisma.subscription.delete({
    where: {
      id: Number(req.params.subscription_id),
    },
  });

  return res.status(200).type('application/json').send({});
});

export { router as subscriptionRouter };
