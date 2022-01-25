import { fetcher } from '@utils/fetchers';

import { Account } from './type';

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

export { getAccountList };
