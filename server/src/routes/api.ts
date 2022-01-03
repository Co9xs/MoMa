import Router from 'express-promise-router';

import { userRouter } from './api/user';
import { creditCardRouter } from './api/credit_card';
import { subscriptionRouter } from './api/subscription';

const router = Router();

router.use(userRouter);
router.use(creditCardRouter);
router.use(subscriptionRouter);

export { router as apiRouter };
