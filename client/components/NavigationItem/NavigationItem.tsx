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
    <li className='list-none'>
      {href !== undefined ? (
        <Link href={href}>
          <div
            className={classNames(
              'flex flex-col items-center justify-center w-12 h-12 hover:bg-green-50 sm:px-2 sm:w-24 sm:h-auto lg:flex-row lg:justify-start lg:px-4 lg:py-2 lg:w-auto lg:h-auto',
              isActive ? 'text-green-800' : ''
            )}
            onClick={onClick}
          >
            {icon !== undefined ? <span className='text-xl lg:pr-2 lg:text-3xl'>{icon}</span> : null}
            <a className='hidden sm:inline sm:text-sm lg:text-xl lg:font-bold'>{text}</a>
          </div>
        </Link>
      ) : (
        <button
          className='flex flex-col items-center justify-center w-12 h-12 hover:bg-green-50 sm:px-2 sm:w-24 sm:h-auto lg:flex-row lg:justify-start lg:px-4 lg:py-2 lg:w-auto lg:h-auto'
          onClick={onClick}
        >
          {icon !== undefined ? <span className='text-xl lg:pr-2 lg:text-3xl'>{icon}</span> : null}
          <span className='hidden sm:inline sm:text-sm lg:text-xl lg:font-bold'>{text}</span>
        </button>
      )}
    </li>
  );
};
