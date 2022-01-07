import express from 'express';
import session from 'express-session';

import { allowCrossDomain } from './middlewares/allowCrossDomain';
import { checkJwt } from './middlewares/checkJwt';
import { apiRouter } from './routes/api';
import { staticRouter } from './routes/static';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    proxy: true,
    resave: false,
    saveUninitialized: false,
    secret: 'secret',
  })
);
app.use(allowCrossDomain);
app.use(checkJwt);

app.use('/api/v1', apiRouter);
app.use(staticRouter);

export { app };
