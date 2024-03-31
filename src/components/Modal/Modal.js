import React from 'react';
import { ModalWrapper } from './Modal.style';


export const Modal = ({ children, onClose, open }) => {

  return (
    <ModalWrapper open={open}>
      <div className='content'>
        <span className='closeButton' onClick={onClose}>&times;</span>
        {children}
      </div>
    </ModalWrapper>
  );
};

