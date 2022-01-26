import { MouseEvent } from 'react';

import { ReactIcon } from '@components/ReactIcon';

import { classNames } from '@utils/classNames';

interface Props {
  children: React.ReactNode;
  disabled: boolean;
  loading: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ModalSubmitButton: React.VFC<Props> = ({ children, disabled, loading, onClick }) => {
  return (
    <button
      className={classNames(
        'block px-8 py-2 text-white bg-green-600 rounded',
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      )}
      disabled={disabled}
      onClick={onClick}
      type='submit'
    >
      {loading ? (
        <span className='pr-2'>
          <span className='inline-block animate-spin'>
            <ReactIcon iconType='circle-notch' />
          </span>
        </span>
      ) : null}
      <span>{children}</span>
    </button>
  );
};

export { ModalSubmitButton };
