import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './AddPet.css';

const AddPet: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [type, setType] = useState('dog');
  const [breed, setBreed] = useState('');
  const [description, setDescription] = useState('');

  const handle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) { alert('Faça login'); navigate('/login'); return; }
    const res = await fetch('/api/pets', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ name, age, type, breed, description, location: 'Não informado' })
    });
    if (res.ok) {
      alert('Pet adicionado');
      navigate('/pets');
    } else alert('Erro ao adicionar');
  };

  return (
    <div className="page add-pet-page">
      <h2>Adicionar Pet</h2>
      <form onSubmit={handle}>
        <label>Nome<input value={name} onChange={e=>setName(e.target.value)} required/></label>
        <label>Idade<input value={age} onChange={e=>setAge(e.target.value)} required/></label>
        <label>Tipo<select value={type} onChange={e=>setType(e.target.value)}>
          <option value="dog">Cachorro</option>
          <option value="cat">Gato</option>
          <option value="other">Outro</option>
        </select></label>
        <label>Raça<input value={breed} onChange={e=>setBreed(e.target.value)} /></label>
        <label>Descrição<textarea value={description} onChange={e=>setDescription(e.target.value)} /></label>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AddPet;
