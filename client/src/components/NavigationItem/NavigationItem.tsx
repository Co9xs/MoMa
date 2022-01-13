import { NavLink } from 'react-router-dom';

import { classNames } from '@utils/classNames';

interface Props {
  text: string;
  href?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const NavigationItem: React.VFC<Props> = ({ icon, text, href, onClick }) => {
  return (
    <li className='list-none w-full h-auto'>
      {href ? (
        <NavLink
          to={href}
          onClick={onClick}
          className={({ isActive }) =>
            classNames(
              'flex flex-row items-center justify-start px-6 py-2 w-full h-auto cursor-pointer',
              isActive ? 'bg-moma-10 text-moma-80 font-bold' : 'bg-moma-80 text-moma-10'
            )
          }
        >
          {icon !== undefined ? <span className='text-2xl pr-2'>{icon}</span> : null}
          <span className='text-lg'>{text}</span>
        </NavLink>
      ) : (
        <button
          className='flex flex-row items-center justify-start px-6 py-2 w-full h-auto bg-moma-80 text-moma-10'
          onClick={onClick}
        >
          {icon !== undefined ? <span className='text-2xl pr-2'>{icon}</span> : null}
          <span className='text-lg'>{text}</span>
        </button>
      )}
    </li>
  );
};

export { NavigationItem };
