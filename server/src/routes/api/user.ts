/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import Router from 'express-promise-router';
import httpErrors from 'http-errors';

import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.post('/signin', (req, res) => {
  const { user_id: auth0Id } = req.body;

  console.log('req.headers:', req.headers);
  console.log('protocol:', req.protocol);
  console.log('ip:', req.ip);
  console.log('res.headers:', res.getHeaders());

  res.setHeader('Set-Cookie', [
    'strict=value; SameSite=Strict',
    'lax=value; SameSite=Lax',
    'none=value; SameSite=None',
  ]);

  if (auth0Id === null || auth0Id === undefined) {
    throw new httpErrors.BadRequest();
  }

  req.session.auth0Id = auth0Id;

  return res.status(200).send({ auth0Id });
});

router.post('/users', async (req, res) => {
  const { user_id: auth0Id }: { user_id: string } = req.body;

  if (auth0Id === null || auth0Id === undefined) {
    throw new httpErrors.BadRequest();
  }

  const user = await prisma.user.create({
    data: {
      auth0Id: auth0Id,
    },
  });

  return res.status(200).type('application/json').send(user);
});

export { router as userRouter };
