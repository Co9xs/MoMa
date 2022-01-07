import '../src/styles/globals.css';
import type { AppProps } from 'next/app';
import { Auth0Provider } from '@auth0/auth0-react';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      domain='dev-94u310s5.us.auth0.com'
      clientId='geDwXgzg4cn5morL7PUQwAaVYvZvq0gq'
      redirectUri='http://localhost:3000/dashboard'
    >
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </Auth0Provider>
  );
}

export default MyApp;
