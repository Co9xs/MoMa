import { ReactIcon } from '@components/ReactIcon';

import { classNames } from '@utils/classNames';

interface Props {
  children: string | null;
}

const ModalErrorMessage: React.VFC<Props> = ({ children: text }) => {
  return (
    <span className={classNames('block h-6 text-red-600', !text ? 'invisible' : '')}>
      <span className='mr-1'>
        <ReactIcon iconType='exclamation-circle' />
      </span>
      {text}
    </span>
  );
};

export { ModalErrorMessage };
