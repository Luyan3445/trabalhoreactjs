// Importo o React porque vou usar JSX no componente
import React from 'react';
// Importo o Link para poder navegar entre páginas sem recarregar a aplicação
import { Link } from 'react-router-dom';
// Importo o hook de autenticação, que me diz se o usuário está logado ou não
import useAuth from '../hooks/useAuth';
// Importo o CSS que estiliza o cabeçalho (header)
import './Header.css';

const Header: React.FC = () => {

    // Aqui eu pego o 'user' (se está logado) e a função logout do hook de autenticação
    const { user, logout } = useAuth();

    return (
        // O elemento <header> representa o topo da aplicação
        <header className="header">

            {/* Logo ou nome da marca, que leva para a página inicial */}
            <div className="brand">
                <Link to="/">Adota+</Link>
            </div>

            {/* Área de navegação */}
            <nav>

                {/* Links comuns que aparecem para todo mundo */}
                <Link to="/pets">Pets</Link>
                <Link to="/about">Sobre</Link>
                <Link to="/contact">Contato</Link>

                {/* Aqui verifico se tem um usuário logado.
           Se tiver, mostro as opções de usuário autenticado.
           Se não tiver, mostro os links de login/cadastro. */}
                {user ? (
                    <>
                        {/* Se estiver logado, pode adicionar pet */}
                        <Link to="/add-pet">Adicionar Pet</Link>

                        {/* Botão de sair (logout) estilizado como link */}
                        <button onClick={logout} className="link-like">
                            Sair
                        </button>
                    </>
                ) : (
                    <>
                        {/* Se NÃO estiver logado, mostro opções de login e cadastro */}
                        <Link to="/login">Login</Link>
                        <Link to="/register-person">Cadastrar Pessoa</Link>
                        <Link to="/register-ong">Cadastrar ONG</Link>
                    </>
                )}
            </nav>
        </header>
    );
};

// Exporto o Header para ser usado no App e em outras páginas
export default Header;

