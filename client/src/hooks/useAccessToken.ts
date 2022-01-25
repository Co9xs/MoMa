import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';

import { API_IDENTIFIER } from '@utils/constants';

interface AccessTokenState {
  data: string | null;
  isLoading: boolean;
  error: unknown | null;
}

const useAccessToken = () => {
  const { getAccessTokenWithPopup } = useAuth0();
  const [accessTokenState, setAccessTokenState] = useState<AccessTokenState>({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    void (async () => {
      try {
        const accessToken = await getAccessTokenWithPopup({ audience: API_IDENTIFIER });
        setAccessTokenState((prev) => {
          return {
            ...prev,
            data: accessToken,
            isLoading: false,
          };
        });
      } catch (e: unknown) {
        setAccessTokenState((prev) => {
          return {
            ...prev,
            error: e,
            isLoading: false,
          };
        });
      }
    })();
  }, [getAccessTokenWithPopup]);

  return accessTokenState;
};

export { useAccessToken };
