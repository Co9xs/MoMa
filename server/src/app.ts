import cors from 'cors';
import express from 'express';
import session from 'express-session';

import { apiRouter } from './routes/api';
import { staticRouter } from './routes/static';
import { ALLOWED_ORIGINS } from './constants';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    proxy: true,
    resave: false,
    saveUninitialized: false,
    secret: 'secret',
    cookie: {
      sameSite: 'none',
      secure: true,
      maxAge: 3600 * 1000, // 1 hour
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
