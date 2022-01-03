import jwt from 'express-jwt';
import jwks from 'jwks-rsa';

const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-94u310s5.us.auth0.com/.well-known/jwks.json',
  }),
  audience: 'https://api.moma.dev',
  issuer: 'https://dev-94u310s5.us.auth0.com/',
  algorithms: ['RS256'],
});

export { checkJwt };
