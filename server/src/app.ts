import cors from 'cors';
import express from 'express';
import session from 'express-session';

import { apiRouter } from './routes/api';
import { staticRouter } from './routes/static';
import { ALLOWED_ORIGINS } from './constants';

const app = express();

app.set('trust proxy', true);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    name: 'connect.moma.sid',
    proxy: true,
    resave: false,
    saveUninitialized: false,
    secret: 'secret key',
    cookie: {
      sameSite: 'none',
      secure: true,
    },
  })
);

app.use(
  cors({
    origin: ALLOWED_ORIGINS,
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type, Authorization, access_token'],
    credentials: true,
  })
);

app.use('/api/v1', apiRouter);
app.use(staticRouter);

export { app };
