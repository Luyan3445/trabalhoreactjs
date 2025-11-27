import React from 'react';
import './Modal.css';

interface Props { children: React.ReactNode; onClose?: () => void }

const Modal: React.FC<Props> = ({ children, onClose }) => {
  return (
    <div className="modal-fundo">
      <div className="modal-conteudo">
        <button className="modal-fechar" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
