// Importo React e alguns hooks que vou usar:
// useState → guarda valores do estado
// useEffect → executa algo quando um valor muda
// useMemo → memoriza resultados para não recalcular toda hora
import React, { useState, useEffect, useMemo } from 'react';

// axios é usado para fazer requisições para a API
import axios from 'axios';

// Importo componentes prontos do projeto
import CartaoPet from '../components/PetCard';
import BarraBusca from '../components/SearchBar';
import BarraFiltro from '../components/FilterBar';
import Carregando from '../components/Loading';
import MensagemErro from '../components/ErrorMessage';

// Importo o tipo Pet
import { Pet } from '../types/pet';

// Hook que faz o “atraso” na digitação para evitar várias requisições seguidas
import useDebouncedValue from '../hooks/useDebouncedValue';

const Pets: React.FC = () => {

    // Lista de pets vinda da API
    const [pets, setPets] = useState<Pet[]>([]);

    // Estados de controle
    const [loading, setLoading] = useState(false);           // mostra carregando
    const [error, setError] = useState<string | null>(null); // mostra erro
    const [query, setQuery] = useState('');                  // texto pesquisado
    const [typeFilter, setTypeFilter] = useState<string>(''); // filtro de tipo (gato, cachorro...)


    // O "debouncedQuery" só atualiza depois de 400ms sem digitação.
    // Isso evita várias chamadas ao backend.
    const debouncedQuery = useDebouncedValue(query, 400);


    // Toda vez que a busca ou o filtro mudar, carrega os pets novamente
    useEffect(() => {

        setLoading(true);
        setError(null);

        axios.get<Pet[]>('http://localhost:3333/api/pets', {
            params: {
                search: debouncedQuery,      // termo de busca
                type: typeFilter || undefined // filtro (se vazio, não envia nada)
            }
        })
            .then(res => setPets(res.data))       // salva pets no estado
            .catch(err => setError('Erro ao carregar pets')) // se der erro, mostra mensagem
            .finally(() => setLoading(false));   // encerra o carregamento
    }, [debouncedQuery, typeFilter]);


    // Agrupa os pets por tipo (dog / cat / other)
    // Isso é feito com useMemo para não recalcular sempre
    const grouped = useMemo(() => {
        const map = new Map<string, Pet[]>();

        pets.forEach(p => {
            const k = p.type; // tipo do pet
            if (!map.has(k)) map.set(k, []);
            map.get(k)!.push(p);
        });

        return map;
    }, [pets]);


    // Exibe carregando
    if (loading) return <Carregando />;

    // Exibe erro
    if (error) return <MensagemErro message={error} />;


    return (
        <div>
            <h1>Adote um pet</h1>

            {/* Barra de busca controlada */}
            <BarraBusca value={query} onChange={setQuery} />

            {/* Filtro por tipo de pet */}
            <BarraFiltro value={typeFilter} onChange={setTypeFilter} />

            {/* Grid com os cards de pets */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                    gap: 16
                }}
            >
                {pets.map(p => (
                    <CartaoPet key={p.id} pet={p} />
                ))}
            </div>
        </div>
    );
};

export default Pets;

