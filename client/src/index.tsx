import { Auth0Provider } from '@auth0/auth0-react';
import ReactDOM from 'react-dom';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import { AppPageContainer } from '@containers/AppPageContainer';

const queryClient = new QueryClient();

const ErrorFallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div role='alert'>
      <p>Error Message</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

ReactDOM.render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
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
    </QueryClientProvider>
  </ErrorBoundary>,
  document.getElementById('app')
);
