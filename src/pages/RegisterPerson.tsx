import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPerson.css';

const RegisterPerson: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handle = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/register-person', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ name, email, password })
    });
    if (res.ok) {
      alert('Cadastro realizado');
      navigate('/login');
    } else alert('Erro no cadastro');
  };

  return (
    <div className="page register-person-page">
      <h2>Cadastro - Pessoa</h2>
      <form onSubmit={handle}>
        <label>Nome<input value={name} onChange={e=>setName(e.target.value)} required/></label>
        <label>Email<input value={email} onChange={e=>setEmail(e.target.value)} required/></label>
        <label>Senha<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/></label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default RegisterPerson;
