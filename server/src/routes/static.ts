import Router from 'express-promise-router';
import serveStatic from 'serve-static';

import { CLIENT_DIST_PATH, PUBLIC_PATH } from '../path';

const router = Router();

// TODO: fix history api fallback for spa
// router.use(history());

router.use(serveStatic(PUBLIC_PATH, { etag: false, lastModified: false }));
router.use(serveStatic(CLIENT_DIST_PATH, { etag: false, lastModified: false }));

export { router as staticRouter };
