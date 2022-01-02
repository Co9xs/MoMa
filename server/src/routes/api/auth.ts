import Router from 'express-promise-router';
import httpErrors from 'http-errors';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.post('/signup', async (req, res) => {
  const user = await prisma.user.create({
    data: {
      name: req.body.username,
      email: req.body.email
    },
  });

  req.session.userId = user.id;

  return res.status(200).type('applicatioin/json').send(user);
});

router.post('/signin', async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: Number(req.body.id),
    },
  });

  if (user === null) {
    throw new httpErrors.BadRequest();
  }
  // TODO: implement password validation or setup auth0
  // if (user.validPassword(req.body.password) === false) {
  //   throw new httpErrors.BadRequest();
  // }

  req.session.userId = user.id;

  return res.status(200).type('application/json').send(user);
});

router.post('/signout', async (req, res) => {
  req.session.userId = undefined;
  return res.status(200).type('application/json').send({});
});

export { router as authRouter };
