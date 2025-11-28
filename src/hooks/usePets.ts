// Importo useState e useEffect, que são hooks do React.
// useState: guarda informações (no caso, os pets e o loading)
// useEffect: executa algo automaticamente quando o componente é montado
import { useState, useEffect } from 'react';

// Esse hook personalizado serve para centralizar toda a lógica
// relacionada aos pets (buscar, carregar, gerenciar lista)
export default function usePets() {

    // pets → lista de pets que vem da API
    const [pets, setPets] = useState<any[]>([]);

    // loading → controla o estado de carregamento (mostra "carregando..." na tela)
    const [loading, setLoading] = useState(false);

    // Função que busca os pets no backend.
    // Ela aceita um parâmetro opcional "q", que é o termo de busca.
    async function fetchPets(q = '') {

        setLoading(true);
        // Coloco loading como true para indicar que a busca está acontecendo

        // Faço a requisição. Se tiver busca, adiciono na URL "?search=..."
        const res = await fetch(
            '/api/pets' + (q ? `?search=${encodeURIComponent(q)}` : '')
        );

        // Converto o resultado da API para JSON
        const data = await res.json();

        // Salvo a lista de pets no estado
        setPets(data);

        // termino o carregamento
        setLoading(false);
    }

    // Esse useEffect roda somente uma vez (quando o componente monta)
    // e chama fetchPets() para carregar os pets automaticamente.
    useEffect(() => {
        fetchPets();
    }, []); // array vazio → executa só na primeira renderização

    // Retorno tudo que outros componentes vão precisar:
    // - pets: lista de pets
    // - loading: estado de carregamento
    // - fetchPets: função para buscar pets novamente (com ou sem busca)
    // - setPets: caso queira atualizar manualmente
    return { pets, loading, fetchPets, setPets };
}
