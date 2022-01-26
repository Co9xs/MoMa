import { useCallback, useState } from 'react';
import { useQuery } from 'react-query';

import { NewAccountModalPageContainer } from '@containers/NewAccountModalPageContainer';

import { DashboardPage } from '@pages/DashboardPage';

import { useAccessToken } from '@hooks/useAccessToken';

import { getAccountList } from '../../apis/account';
import { getCreditCardList } from '../../apis/creditCard';

type ModalType = 'account' | 'creditCard' | 'none';

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

  const [modalType, setModalType] = useState<ModalType>('none');
  const handleRequestOpenAccountModal = useCallback(() => setModalType('account'), []);
  const handleRequestOpenCreditCardModal = useCallback(() => setModalType('creditCard'), []);
  const handleRequestCloseModal = useCallback(() => setModalType('none'), []);

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
        onRequestOpenAccountModal={handleRequestOpenAccountModal}
        onRequestOpenCreditCardModal={handleRequestOpenCreditCardModal}
      />

      {modalType === 'account' ? <NewAccountModalPageContainer onRequestCloseModal={handleRequestCloseModal} /> : null}
      {modalType === 'creditCard' ? (
        <div>
          credit Modal<button onClick={handleRequestCloseModal}>close</button>
        </div>
      ) : null}
    </>
  );
};

export { DashboardPageContainer };
