import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';

import { API_IDENTIFIER } from '@utils/constants';

const useAccessToken = () => {
  const { getAccessTokenWithPopup } = useAuth0();
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    void (async () => {
      const accessToken = await getAccessTokenWithPopup({ audience: API_IDENTIFIER });
      setAccessToken(accessToken);
    })();
  }, [getAccessTokenWithPopup]);

  return accessToken;
};

export { useAccessToken };
