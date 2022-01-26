import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { CreditCardPayload } from 'src/apis/type';

import { ModalErrorMessage } from '@components/ModalErrorMessage';
import { ModalSubmitButton } from '@components/ModalSubmitButton';

interface Props {
  hasError: boolean;
  isLoading: boolean;
  onResetError: () => void;
  onSubmit: (payload: CreditCardPayload) => void;
}

const NewCreditCardModalPage: React.VFC<Props> = ({ hasError, isLoading, onResetError, onSubmit }) => {
  const [payload, setPayload] = useState<CreditCardPayload>({ name: '', budget: 0 });

  const handleChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setPayload((payload) => ({
      ...payload,
      name,
    }));
  }, []);

  const handleChangeBudget = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const budget = Number(e.target.value);
    setPayload((payload) => ({
      ...payload,
      budget,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onResetError();
      onSubmit(payload);
    },
    [payload, onSubmit, onResetError]
  );

  return (
    <section className='px-6'>
      <form className='flex flex-col items-center w-full' onSubmit={handleSubmit}>
        <h3 className='font-bold text-moma-80 text-lg'>新しいカードを作成</h3>
        <p className='mt-4 w-full'>
          <span className='text-moma-70'>カード名</span>
          <input
            className='placeholder-gray-300 p-4 w-full h-12 border border-gray-300 rounded'
            onChange={handleChangeName}
            placeholder='〇〇カード'
          />
        </p>
        <p className='mt-4 w-full'>
          <span className='text-moma-70'>今月の予算</span>
          <input
            className='placeholder-gray-300 p-4 w-full h-12 border border-gray-300 rounded'
            onChange={handleChangeBudget}
            placeholder='12345'
          />
        </p>
        <p className='mt-6'>
          <ModalSubmitButton disabled={isLoading || payload.name === '' || payload.budget === 0} loading={isLoading}>
            作成する
          </ModalSubmitButton>
        </p>
        <p className='mt-4'>
          <ModalErrorMessage>{hasError ? '作成できませんでした' : null}</ModalErrorMessage>
        </p>
      </form>
    </section>
  );
};

export { NewCreditCardModalPage };
