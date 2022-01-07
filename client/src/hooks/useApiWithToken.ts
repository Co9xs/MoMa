import { useEffect, useState } from 'react';
import { GetTokenSilentlyOptions, useAuth0 } from '@auth0/auth0-react';
import {
  AuthenticationError,
  GenericError,
  TimeoutError,
  PopupTimeoutError,
  PopupCancelledError,
  MfaRequiredError,
} from '@auth0/auth0-spa-js';

type Options = GetTokenSilentlyOptions & RequestInit;
type Errors =
  | GenericError
  | AuthenticationError
  | TimeoutError
  | PopupTimeoutError
  | PopupCancelledError
  | MfaRequiredError;

export const useApiWithToken = (url: string, options: Options) => {
  const { getAccessTokenSilently } = useAuth0();
  const [state, setState] = useState<{ error: Errors | null; isLoading: boolean; data: Response | null }>({
    error: null,
    isLoading: true,
    data: null,
  });
  const [refreshIndex, setRefreshIndex] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const { audience, scope, ...fetchOptions } = options;
        const accessToken = await getAccessTokenSilently({
          audience,
          scope,
        });
        const response = await fetch(url, {
          ...fetchOptions,
          headers: {
            ...fetchOptions.headers,
            Authorization: `Bearer ${accessToken}`,
          },
          mode: 'cors',
        });
        setState({
          ...state,
          data: await response.json(),
          isLoading: false,
        });
      } catch (error: unknown) {
        if (
          error instanceof GenericError ||
          error instanceof AuthenticationError ||
          error instanceof TimeoutError ||
          error instanceof PopupCancelledError ||
          error instanceof PopupTimeoutError ||
          error instanceof MfaRequiredError
        ) {
          setState({
            ...state,
            error,
            isLoading: false,
          });
        }
      }
    })();
  }, [refreshIndex]);

  return {
    ...state,
    refresh: () => setRefreshIndex(refreshIndex + 1),
  };
};
