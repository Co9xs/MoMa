import { User } from '@auth0/auth0-react';

import { fetcher } from '@utils/fetchers';

const setSession = async (user: User): Promise<{ auth0Id: string }> => {
  return fetcher<{ auth0Id: string }>('/api/v1/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user_id: user.sub }),
    mode: 'cors',
  });
};

export { setSession };
