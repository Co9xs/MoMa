import { useQuery } from 'react-query';

import { DashboardPage } from '@pages/DashboardPage';

import { useAccessToken } from '@hooks/useAccessToken';
import { getAccountList } from '@utils/fetchers';

const _accounts = [
  {
    id: 1,
    name: '楽天銀行',
    balance: 165040,
  },
  {
    id: 2,
    name: 'ゆうちょ銀行',
    balance: 21040,
  },
];

const _creditCards = [
  {
    id: 1,
    name: '楽天カード',
    budget: 50000,
  },
  {
    id: 2,
    name: '三井住友カード',
    budget: 20000,
  },
];

const DashboardPageContainer: React.VFC = () => {
  const accessToken = useAccessToken();
  const { data: accounts, isLoading } = useQuery(['accounts', accessToken], () => getAccountList(accessToken), {
    enabled: accessToken !== null,
    useErrorBoundary: true,
  });

  if (isLoading) {
    return <div>isLoading</div>;
  }

  return (
    <>
      <div>{JSON.stringify(accounts)}</div>
      <DashboardPage
        accounts={[]}
        creditCards={_creditCards}
        onRequestOpenAccountModal={() => {}}
        onRequestOpenCreditCardModal={() => {}}
      />
    </>
  );
};

export { DashboardPageContainer };
