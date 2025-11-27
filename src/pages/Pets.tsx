import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import CartaoPet from '../components/PetCard';
import BarraBusca from '../components/SearchBar';
import BarraFiltro from '../components/FilterBar';
import Carregando from '../components/Loading';
import MensagemErro from '../components/ErrorMessage';
import { Pet } from '../types/pet';
import useDebouncedValue from '../hooks/useDebouncedValue';

const Pets: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('');

  const debouncedQuery = useDebouncedValue(query, 400);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios.get<Pet[]>('http://localhost:3333/api/pets', {
      params: { search: debouncedQuery, type: typeFilter || undefined }
    })
      .then(res => setPets(res.data))
      .catch(err => setError('Erro ao carregar pets'))
      .finally(() => setLoading(false));
  }, [debouncedQuery, typeFilter]);

  const grouped = useMemo(() => {
    const map = new Map<string, Pet[]>();
    pets.forEach(p => {
      const k = p.type;
      if (!map.has(k)) map.set(k, []);
      map.get(k)!.push(p);
    });
    return map;
  }, [pets]);

  if (loading) return <Carregando />;
  if (error) return <MensagemErro message={error} />;

  return (
    <div>
      <h1>Adote um pet</h1>
      <BarraBusca value={query} onChange={setQuery} />
      <BarraFiltro value={typeFilter} onChange={setTypeFilter} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 16 }}>
        {pets.map(p => <CartaoPet key={p.id} pet={p} />)}
      </div>
    </div>
  );
};

export default Pets;
