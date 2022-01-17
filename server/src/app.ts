import express from 'express';
import session from 'express-session';

import { allowCrossDomain } from './middlewares/allowCrossDomain';
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

app.get('/', (req, res) => {
  return res.end('Hello Express');
});

app.use('/api/v1', apiRouter);
app.use(staticRouter);

export { app };
