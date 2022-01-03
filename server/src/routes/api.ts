import Router from 'express-promise-router';

import { subscriptionRouter } from './api/subscription';

const router = Router();

router.use(subscriptionRouter);

export { router as apiRouter };
