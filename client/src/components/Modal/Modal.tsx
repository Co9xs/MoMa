import { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface Props {
  children: React.ReactNode;
  onRequestCloseModal: () => void;
}

const Modal: React.VFC<Props> = ({ children, onRequestCloseModal }) => {
  useEffect(() => {
    document.body.style.setProperty('overflow', 'hidden');
    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, []);

  useEffect(() => {
    const escapeClickHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onRequestCloseModal();
      }
    };
    document.addEventListener('keyup', escapeClickHandler);
    return () => document.removeEventListener('keyup', escapeClickHandler);
  }, [onRequestCloseModal]);

  return ReactDOM.createPortal(
    <div className='fixed z-10 bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-moma-80 bg-opacity-50'>
      <div className='absolute bottom-0 left-0 right-0 top-0' onClick={onRequestCloseModal}></div>
      <div className='flex flex-col items-center justify-center px-2 w-full h-4/6'>
        <div className='relative px-2 py-8 w-full max-w-md max-h-full bg-moma-10 rounded'>
          <div className='relative w-full max-h-full'>{children}</div>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export { Modal };
