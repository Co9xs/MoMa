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
    <section>
      <form className='flex flex-col items-center w-full' onSubmit={handleSubmit}>
        <input
          className='placeholder-gray-300 p-4 w-full h-24 border border-gray-300 rounded resize-none'
          onChange={handleChangeName}
          placeholder='〇〇銀行'
        />
        <input
          className='placeholder-gray-300 p-4 w-full h-24 border border-gray-300 rounded resize-none'
          onChange={handleChangeBalance}
          placeholder='12345'
        />
        <p className='mt-4'>
          <ModalSubmitButton disabled={isLoading || payload.name === ''} loading={isLoading}>
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
