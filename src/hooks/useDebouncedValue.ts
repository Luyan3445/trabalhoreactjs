import { useEffect, useState } from 'react';

// Esse hook serve para "atrasar" uma atualização de valor.
// Ele é muito útil em campos de busca, para evitar chamadas na API a cada tecla digitada.
// Em vez disso, ele espera alguns milissegundos antes de atualizar.
export default function useDebouncedValue<T>(value: T, delay = 300) {

    // Esse estado guarda o valor após o atraso (debounced)
    const [debounced, setDebounced] = useState(value);

    // O useEffect roda sempre que o "value" mudar
    useEffect(() => {

        // Aqui criamos um timer que só atualiza o valor depois do tempo definido pelo delay
        const id = setTimeout(() => setDebounced(value), delay);

        // O return serve para limpar o timeout se o usuário digitar antes do delay acabar.
        // Isso impede várias atualizações desnecessárias.
        return () => clearTimeout(id);

    }, [value, delay]);
    // A cada mudança de "value" ou do "delay", esse efeito é reexecutado.

    // Por fim, retornamos o valor atrasado (debounced)
    return debounced;
}
