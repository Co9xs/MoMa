import { classNames } from '@utils/classNames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: React.ReactNode;
  mode?: 'primary' | 'secondary' | 'warn' | 'danger';
}

const Button: React.VFC<Props> = ({ icon, text, mode = 'primary', ...rest }) => {
  return (
    <button {...rest}>
      <div
        className={classNames(
          'flex flex-row items-center justify-center px-2 py-1 w-auto h-auto rounded-sm',
          mode === 'primary' ? 'bg-moma-80 text-moma-10' : ''
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

export { Button };
