import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Header.css';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  return (
    <header className="header">
      <div className="brand"><Link to="/">Adota+</Link></div>
      <nav>
        <Link to="/pets">Pets</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contato</Link>
        {user ? (
          <>
            <Link to="/add-pet">Adicionar Pet</Link>
            <button onClick={logout} className="link-like">Sair</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register-person">Cadastrar Pessoa</Link>
            <Link to="/register-ong">Cadastrar ONG</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
