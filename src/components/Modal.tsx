// Importo o React porque o componente usa JSX
import React from 'react';
// Importo o CSS que estiliza o modal (fundo escuro, caixa, botão de fechar etc.)
import './Modal.css';

// Aqui defino as props que o modal recebe:
// - children → é o conteúdo que vai aparecer dentro do modal
// - onClose → é a função opcional que será executada quando clicar no X
interface Props {
    children: React.ReactNode;
    onClose?: () => void
}

// Componente de Modal, usado para exibir uma caixa no centro da tela
const Modal: React.FC<Props> = ({ children, onClose }) => {
    return (
        // Fundo escurecido atrás do modal
        <div className="modal-fundo">

            {/* Caixa branca onde aparece o conteúdo do modal */}
            <div className="modal-conteudo">

                {/* Botão de fechar o modal. Ele chama a função onClose se ela existir */}
                <button className="modal-fechar" onClick={onClose}>
                    X
                </button>

                {/* Aqui dentro aparece o conteúdo enviado para o modal (children) */}
                {children}
            </div>
        </div>
    );
};

// Exporto o modal para ser usado em outras telas, como no PetDetails
export default Modal;
