import Router from 'express-promise-router';

import { authRouter } from './api/auth';

const router = Router();

router.use(authRouter);

export { router as apiRouter };
