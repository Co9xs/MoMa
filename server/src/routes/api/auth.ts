import Router from 'express-promise-router';
import httpErrors from 'http-errors';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const router = Router();
const prisma = new PrismaClient();

router.post('/signup', async (req, res) => {
  const emailAlreadyUsed = Boolean(
    await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    })
  );

  if (emailAlreadyUsed) {
    throw new httpErrors.BadRequest('This email has already used.');
  }

  const hashedPassword = bcrypt.hashSync(req.body.password, 10);

  const user = await prisma.user.create({
    data: {
      name: req.body.username,
      email: req.body.email,
      password: hashedPassword,
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

  if (bcrypt.compareSync(req.body.password, user.password) === false) {
    throw new httpErrors.BadRequest();
  }

  req.session.userId = user.id;

  return res.status(200).type('application/json').send(user);
});

router.post('/signout', async (req, res) => {
  req.session.userId = undefined;
  return res.status(200).type('application/json').send({});
});

export { router as authRouter };
