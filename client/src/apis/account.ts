import { fetcher } from '@utils/fetchers';

import { Account, AccountPayload } from './type';

const getAccountList = async (accessToken: string): Promise<Account[]> => {
  return fetcher<Account[]>('/api/v1/accounts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    mode: 'cors',
    credentials: 'include',
  });
};

const postNewAccount = async (accessToken: string, payload: AccountPayload): Promise<Account> => {
  return fetcher<Account>('/api/v1/accounts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(payload),
    mode: 'cors',
    credentials: 'include',
  });
};

export { getAccountList, postNewAccount };
