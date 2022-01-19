import { Auth0Provider } from '@auth0/auth0-react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import { AppPageContainer } from '@containers/AppPageContainer';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Auth0Provider
      domain='dev-94u310s5.us.auth0.com'
      clientId='geDwXgzg4cn5morL7PUQwAaVYvZvq0gq'
      redirectUri={window.location.origin}
    >
      <BrowserRouter>
        <AppPageContainer />
      </BrowserRouter>
    </Auth0Provider>
  </QueryClientProvider>,
  document.getElementById('app')
);
