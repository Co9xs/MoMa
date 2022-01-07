import express from 'express';

// WARN: Dont use this middleware in production
export const allowCrossDomain = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, access_token');

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
};
