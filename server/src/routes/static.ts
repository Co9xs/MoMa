import Router from 'express-promise-router';
import serveStatic from 'serve-static';
import history from 'connect-history-api-fallback';

import { CLIENT_DIST_PATH, PUBLIC_PATH } from '../path';

const router = Router();

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
router.use(history());

router.use(serveStatic(PUBLIC_PATH, { etag: false, lastModified: false }));
router.use(serveStatic(CLIENT_DIST_PATH, { etag: false, lastModified: false }));

export { router as staticRouter };
