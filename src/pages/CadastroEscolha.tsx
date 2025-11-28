// Importo o React porque vou usar JSX para montar a interface
import React from 'react';
// Importo o useNavigate, que é usado para trocar de página sem recarregar o site
import { useNavigate } from 'react-router-dom';
// Importo o CSS com os estilos do cartão de escolha
import './CadastroEscolha.css';

const CadastroEscolha: React.FC = () => {

    // Aqui eu crio a função que permite navegar entre rotas
    const navigate = useNavigate();

    return (
        <div className="cadastro-wrapper">

            <div className="cadastro-card">

                {/* Título da página */}
                <h2>Como deseja se cadastrar?</h2>

                {/* Área dos botões de escolha */}
                <div className="opcoes">

                    {/* Botão para ir para o cadastro de pessoa */}
                    <button
                        className="btn-opcao"
                        onClick={() => navigate('/register-person')}
                    >
                        Sou Pessoa
                    </button>

                    {/* Botão para ir para o cadastro de ONG */}
                    <button
                        className="btn-opcao"
                        onClick={() => navigate('/register-ong')}
                    >
                        Sou ONG
                    </button>

                </div>
            </div>
        </div>
    );
};

// Exporto o componente para ser usado na tela de login ou navegação
export default CadastroEscolha;
