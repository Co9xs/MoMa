import { fetcher } from '@utils/fetchers';

import { CreditCard } from './type';

const getCreditCardList = async (accessToken: string): Promise<CreditCard[]> => {
  return fetcher<CreditCard[]>('/api/v1/accounts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    mode: 'cors',
    credentials: 'include',
  });
};

export { getCreditCardList };
