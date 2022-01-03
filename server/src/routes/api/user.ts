import Router from 'express-promise-router';
import httpErrors from 'http-errors';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/me', async (req, res) => {
  if (req.body.auth0Id === undefined) {
    throw new httpErrors.Unauthorized();
  }

  const user = await prisma.user.findUnique({
    where: {
      auth0Id: req.body.auth0Id,
    },
  });

  if (user === null) {
    throw new httpErrors.NotFound();
  }

  return res.status(200).type('applicatioin/json').send(user);
});

export { router as userRouter };
