/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import Router from 'express-promise-router';
import httpErrors from 'http-errors';
import { PrismaClient } from '@prisma/client';
import { checkJwt } from '../../middlewares/checkJwt';

const router = Router();
const prisma = new PrismaClient();

router.get('/subscriptions', checkJwt, async (req, res) => {
  const currentUserId = req.session.auth0Id;

  if (currentUserId === undefined) {
    throw new httpErrors.Unauthorized();
  }

  const subscriptions = await prisma.subscription.findMany({
    where: {
      subscriberId: currentUserId,
    },
  });

  return res.status(200).type('applicatioin/json').send(subscriptions);
});

router.post('/subscriptions', checkJwt, async (req, res) => {
  const currentUserId = req.session.auth0Id;

  if (currentUserId === undefined) {
    throw new httpErrors.Unauthorized();
  }

  const newSubscription = await prisma.subscription.create({
    data: {
      name: req.body.name,
      price: req.body.price,
      subscriberId: currentUserId,
    },
  });

  return res.status(200).type('application/json').send(newSubscription);
});

router.patch('/subscriptions/:subscription_id', checkJwt, async (req, res) => {
  const currentUserId = req.session.auth0Id;

  if (currentUserId === undefined) {
    throw new httpErrors.Unauthorized();
  }

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

router.delete('/subscriptions/:subscription_id', checkJwt, async (req, res) => {
  const currentUserId = req.session.auth0Id;

  if (currentUserId === undefined) {
    throw new httpErrors.Unauthorized();
  }

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
