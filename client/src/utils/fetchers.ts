import { User } from '@auth0/auth0-react';

import { API_ENDPOINT } from '@utils/constants';

const setSession: (user: User) => Promise<string> = async (user) => {
  const res = await fetch(`${API_ENDPOINT}/api/v1/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user_id: user.sub }),
    mode: 'cors',
  });

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  return res.json() as Promise<string>;
};

export { setSession };
