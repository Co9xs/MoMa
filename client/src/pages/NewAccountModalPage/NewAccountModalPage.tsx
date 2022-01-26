import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { AccountPayload } from 'src/apis/type';

import { ModalErrorMessage } from '@components/ModalErrorMessage';
import { ModalSubmitButton } from '@components/ModalSubmitButton';

interface Props {
  hasError: boolean;
  isLoading: boolean;
  onResetError: () => void;
  onSubmit: (payload: AccountPayload) => void;
}

const NewAccountModalPage: React.VFC<Props> = ({ hasError, isLoading, onResetError, onSubmit }) => {
  const [payload, setPayload] = useState<AccountPayload>({ name: '', balance: 0 });

  const handleChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setPayload((payload) => ({
      ...payload,
      name,
    }));
  }, []);

  const handleChangeBalance = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const balance = Number(e.target.value);
    setPayload((payload) => ({
      ...payload,
      balance,
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
        <h3 className='font-bold text-moma-80 text-lg'>新しい口座を作成</h3>
        <p className='mt-4 w-full'>
          <span className='text-moma-70'>口座名</span>
          <input
            className='placeholder-gray-300 p-4 w-full h-12 border border-gray-300 rounded'
            onChange={handleChangeName}
            placeholder='〇〇銀行'
          />
        </p>
        <p className='mt-4 w-full'>
          <span className='text-moma-70'>口座残高</span>
          <input
            className='placeholder-gray-300 p-4 w-full h-12 border border-gray-300 rounded'
            onChange={handleChangeBalance}
            placeholder='12345'
          />
        </p>
        <p className='mt-6'>
          <ModalSubmitButton disabled={isLoading || payload.name === '' || payload.balance === 0} loading={isLoading}>
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

export { NewAccountModalPage };
