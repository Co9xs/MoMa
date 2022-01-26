import { useCallback, useState } from 'react';
import { useMutation } from 'react-query';

import { NewCreditCardModalPage } from '@pages/NewCreditCardModalPage';

import { Modal } from '@components/Modal';

import { useAccessToken } from '@hooks/useAccessToken';

import { postNewCreditCard } from '../../apis/creditCard';
import { CreditCardPayload } from '../../apis/type';

interface Props {
  onRequestCloseModal: () => void;
}

const NewCreditCardModalPageContainer: React.VFC<Props> = ({ onRequestCloseModal }) => {
  const [hasError, setHasError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { data: accessToken, isLoading: isLoadingAccessToken } = useAccessToken();

  const { isLoading: isLoadingNewCreditCard, mutate } = useMutation((creditCardPayload: CreditCardPayload) =>
    postNewCreditCard(accessToken, creditCardPayload)
  );

  const handleResetError = useCallback(() => {
    setHasError(false);
  }, []);

  const handleSubmit = useCallback((payload: CreditCardPayload) => {
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
      <NewCreditCardModalPage
        hasError={hasError}
        isLoading={isSubmitting || isLoadingAccessToken || isLoadingNewCreditCard}
        onResetError={handleResetError}
        onSubmit={handleSubmit}
      />
    </Modal>
  );
};

export { NewCreditCardModalPageContainer };
