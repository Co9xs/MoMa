import { auth } from 'express-oauth2-jwt-bearer';

const checkJwt = auth({
  audience: 'https://api.moma.dev',
  issuerBaseURL: `https://dev-94u310s5.us.auth0.com/`,
});

export { checkJwt };
