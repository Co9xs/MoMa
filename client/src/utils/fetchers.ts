import { User } from '@auth0/auth0-react';
import { Account } from 'src/types';

import { API_ENDPOINT } from '@utils/constants';

const setSession: (user: User) => Promise<{ auth0Id: string }> = async (user) => {
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

  return res.json() as Promise<{ auth0Id: string }>;
};

const getAccountList: () => Promise<Account[]> = async () => {
  const res = await fetch(`${API_ENDPOINT}/api/v1/accounts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
  });

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  return res.json() as Promise<Account[]>;
};

export { setSession, getAccountList };
