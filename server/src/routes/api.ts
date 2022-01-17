import Router from 'express-promise-router';

import { userRouter } from './api/user';
import { creditCardRouter } from './api/credit_card';
import { subscriptionRouter } from './api/subscription';
import { creditCardStatementRouter } from './api/credit_card_statement';
import { accountRouter } from './api/account';
import { accountStatementRouter } from './api/account_statement';

const router = Router();

router.use(userRouter);
router.use(creditCardRouter);
router.use(creditCardStatementRouter);
router.use(accountRouter);
router.use(accountStatementRouter);
router.use(subscriptionRouter);

export { router as apiRouter };
