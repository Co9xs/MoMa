import { User } from '@auth0/auth0-react';
import { Account, CreditCard } from 'src/types';

const setSession: (user: User) => Promise<{ auth0Id: string }> = async (user) => {
  const res = await fetch(`/api/v1/signin`, {
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

const getAccountList: (accessToken: string) => Promise<Account[]> = async (accessToken) => {
  const res = await fetch(`/api/v1/accounts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    mode: 'cors',
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  return res.json() as Promise<Account[]>;
};

const getCreditCardList: (accessToken: string) => Promise<CreditCard[]> = async (accessToken) => {
  const res = await fetch('/api/v1/accounts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    mode: 'cors',
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  return res.json() as Promise<CreditCard[]>;
};

export { setSession, getAccountList, getCreditCardList };
