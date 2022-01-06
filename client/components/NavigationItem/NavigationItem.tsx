import Link from 'next/link';
import { useRouter } from 'next/router';

import { classNames } from '../../utils/classNames';

interface Props {
  text: string;
  href?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export const NavigationItem: React.VFC<Props> = ({ icon, text, href, onClick }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <li className={'list-none'}>
      {href !== undefined ? (
        <Link href={href}>
          <div
            className={classNames(
              'flex flex-row items-center justify-start px-6 py-2 w-auto h-auto cursor-pointer',
              isActive ? 'bg-white-200 text-black-200' : 'bg-black-200 text-white-200'
            )}
            onClick={onClick}
          >
            {icon !== undefined ? <span className='text-2xl pr-2'>{icon}</span> : null}
            <a className='text-lg'>{text}</a>
          </div>
        </Link>
      ) : (
        <button
          className='flex flex-row items-center justify-start px-6 py-2 w-full h-auto bg-black-200 text-white-200'
          onClick={onClick}
        >
          {icon !== undefined ? <span className='text-2xl pr-2'>{icon}</span> : null}
          <span className='text-lg'>{text}</span>
        </button>
      )}
    </li>
  );
};
