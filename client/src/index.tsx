import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

import { AppPageContainer } from '@containers/AppPageContainer';

ReactDOM.render(
  <Auth0Provider
    domain='dev-94u310s5.us.auth0.com'
    clientId='geDwXgzg4cn5morL7PUQwAaVYvZvq0gq'
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <AppPageContainer />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById('app')
);
