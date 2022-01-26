import { useCallback, useState } from 'react';
import { useMutation } from 'react-query';
import { postNewAccount } from 'src/apis/account';
import { AccountPayload } from 'src/apis/type';

import { NewAccountModalPage } from '@pages/NewAccountModalPage';

import { Modal } from '@components/Modal';

import { useAccessToken } from '@hooks/useAccessToken';

interface Props {
  onRequestCloseModal: () => void;
}

const NewAccountModalPageContainer: React.VFC<Props> = ({ onRequestCloseModal }) => {
  const [hasError, setHasError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { data: accessToken, isLoading: isLoadingAccessToken } = useAccessToken();

  const { isLoading: isLoadingNewAccount, mutate } = useMutation((accountPayload: AccountPayload) =>
    postNewAccount(accessToken, accountPayload)
  );

  const handleResetError = useCallback(() => {
    setHasError(false);
  }, []);

  const handleSubmit = useCallback((payload: AccountPayload) => {
    try {
      setIsSubmitting(true);
      mutate(payload);
      onRequestCloseModal();
    } catch (_error) {
      setHasError(true);
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return (
    <Modal onRequestCloseModal={onRequestCloseModal}>
      <NewAccountModalPage
        hasError={hasError}
        isLoading={isSubmitting || isLoadingAccessToken || isLoadingNewAccount}
        onResetError={handleResetError}
        onSubmit={handleSubmit}
      />
    </Modal>
  );
};

export { NewAccountModalPageContainer };
