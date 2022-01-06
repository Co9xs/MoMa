import { classNames } from '../../utils/classNames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: React.ReactNode;
  mode?: 'primary' | 'secondary' | 'warn' | 'danger';
}

export const Button: React.VFC<Props> = ({ icon, text, type, mode = 'primary', ...rest }) => {
  return (
    <button {...rest}>
      <div
        className={classNames(
          'flex flex-row items-center justify-center px-2 py-1 w-auto h-auto rounded-sm',
          mode === 'primary' ? 'bg-black-200 text-white-100' : ''
        )}
      >
        {icon ? (
          <>
            <span className='pr-1'>{icon}</span>
            <span className='text-sm pr-1'>{text}</span>
          </>
        ) : (
          <span className='text-sm'>{text}</span>
        )}
      </div>
    </button>
  );
};
