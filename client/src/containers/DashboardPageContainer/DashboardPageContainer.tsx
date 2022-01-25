import { useQuery } from 'react-query';

import { DashboardPage } from '@pages/DashboardPage';

import { useAccessToken } from '@hooks/useAccessToken';

import { getAccountList } from '../../apis/account';
import { getCreditCardList } from '../../apis/creditCard';

const DashboardPageContainer: React.VFC = () => {
  const { data: accessToken, isLoading: isLoadingAccessToken } = useAccessToken();

  const { data: accounts, isLoading: isLoadingAccountList } = useQuery(
    ['accounts', accessToken],
    () => getAccountList(accessToken),
    {
      enabled: accessToken !== null,
      useErrorBoundary: true,
    }
  );

  const { data: creditCards, isLoading: isLoadingCreditCardList } = useQuery(
    ['creditCards', accessToken],
    () => getCreditCardList(accessToken),
    {
      enabled: accessToken !== null,
      useErrorBoundary: true,
    }
  );

  if (isLoadingAccessToken) {
    return <div>isLoaing AccessToken...</div>;
  }

  if (isLoadingAccountList || isLoadingCreditCardList) {
    return <div>isLoading Content...</div>;
  }

  return (
    <>
      <DashboardPage
        accounts={accounts}
        creditCards={creditCards}
        onRequestOpenAccountModal={() => {}}
        onRequestOpenCreditCardModal={() => {}}
      />
    </>
  );
};

export { DashboardPageContainer };
