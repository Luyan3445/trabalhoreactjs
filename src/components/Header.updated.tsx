// Importo o React porque o componente usa JSX
import React from 'react';
// Importo o Link, que faz a navegação entre páginas sem recarregar o site
import { Link } from 'react-router-dom';
// Importo o hook personalizado de autenticação, onde posso saber se o usuário está logado
import useAuth from '../hooks/useAuth';
// Importo o CSS com o estilo do cabeçalho
import './Header.css';

const Header: React.FC = () => {

    // Aqui eu pego do hook:
    // - user → diz se tem alguém logado
    // - logout → função que desloga o usuário
    const { user, logout } = useAuth();

    return (
        // O elemento <header> representa o topo do site
        <header className="header">

            {/* Logo da aplicação. Ao clicar, volta para a página inicial */}
            <div className="brand">
                <Link to="/">Adota+</Link>
            </div>

            {/* Menu de navegação */}
            <nav>

                {/* Links que aparecem sempre, independente de estar logado */}
                <Link to="/pets">Pets</Link>
                <Link to="/about">Sobre</Link>
                <Link to="/contact">Contato</Link>

                {/* Aqui eu verifico se o usuário está logado */}
                {user ? (
                    // Se estiver logado:
                    <>
                        {/* Mostra o botão para adicionar pet */}
                        <Link to="/add-pet">Adicionar Pet</Link>

                        {/* Botão de sair. Ele chama a função logout do hook */}
                        <button onClick={logout} className="link-like">
                            Sair
                        </button>
                    </>
                ) : (
                    // Se NÃO estiver logado:
                    <>
                        {/* Mostra opções de login e cadastro */}
                        <Link to="/login">Login</Link>
                        <Link to="/register-person">Cadastrar Pessoa</Link>
                        <Link to="/register-ong">Cadastrar ONG</Link>
                    </>
                )}
            </nav>
        </header>
    );
};

// Exporto o Header para usar no App principal
export default Header;

