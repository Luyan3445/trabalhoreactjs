// Importo o React porque o componente usa JSX
import React, { useState, useEffect } from 'react';
// Importo o CSS responsável por estilizar
import './FavoritesButton.css';

// Recebe uma prop chamada "id" que vai identificar cada item favorito
interface Props { id: number }

const BotaoFavorito: React.FC<Props> = ({ id }) => {

    // Estado que guarda se o item está favoritado ou não
    const [fav, setFav] = useState(false);

    // Quando o componente carrega, verifica no localStorage se esse item já estava favoritado
    useEffect(() => {
        const s = localStorage.getItem('fav_' + id);
        setFav(!!s); // Se tiver algo salvo, vira true, se não, false
    }, [id]); // Executa sempre que o id mudar

    // Função que alterna entre favoritar e desfavoritar
    const toggle = () => {
        const next = !fav; // Inverte o valor atual
        setFav(next);

        // Se for true, salva no localStorage. Se não, remove.
        if (next)
            localStorage.setItem('fav_' + id, '1');
        else
            localStorage.removeItem('fav_' + id);
    };

    // Botão que mostra ★ se estiver favoritado e ☆ se não estiver
    return (
        <button className="botao-fav" onClick={toggle}>
            {fav ? '★' : '☆'}
        </button>
    );
};

export default BotaoFavorito;
