import express from 'express';
import session from 'express-session';
import { apiRouter } from './routes/api';

const app = express();
app.use(express.json());
app.use(
  session({
    proxy: true,
    resave: false,
    saveUninitialized: false,
    secret: 'secret',
  })
);

app.use('/api/v1', apiRouter);

export { app };
