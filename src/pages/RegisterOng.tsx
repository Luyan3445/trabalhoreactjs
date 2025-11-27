import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterOng.css';

const RegisterOng: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cnpj, setCnpj] = useState('');
  const navigate = useNavigate();

  const handle = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/register-ong', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ name, email, password, cnpj })
    });
    if (res.ok) {
      alert('ONG cadastrada');
      navigate('/login');
    } else alert('Erro no cadastro');
  };

  return (
    <div className="page register-ong-page">
      <h2>Cadastro - ONG</h2>
      <form onSubmit={handle}>
        <label>Nome<input value={name} onChange={e=>setName(e.target.value)} required/></label>
        <label>CNPJ<input value={cnpj} onChange={e=>setCnpj(e.target.value)} /></label>
        <label>Email<input value={email} onChange={e=>setEmail(e.target.value)} required/></label>
        <label>Senha<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/></label>
        <button type="submit">Cadastrar ONG</button>
      </form>
    </div>
  );
};

export default RegisterOng;
