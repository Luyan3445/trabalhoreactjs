import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ok = await login(email, password);
    if (ok) navigate('/');
    else alert('Credenciais inválidas');
  };

  return (
    <div className="page login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>Email<input value={email} onChange={e=>setEmail(e.target.value)} required/></label>
        <label>Senha<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/></label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
