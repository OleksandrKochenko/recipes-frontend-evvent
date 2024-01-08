import { createPortal } from 'react-dom';
import { Spiner } from './elements/spinner';

const modalRoot = document.querySelector('#root-modal');

export const Loader = () => {
  return createPortal(
    <div className="w-screen h-screen bg-black bg-opacity-20 z-50 fixed top-0 left-0 flex justify-center items-top">
      <Spiner />
    </div>,
    modalRoot
  );
};
