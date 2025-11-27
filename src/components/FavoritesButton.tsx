import React, { useState, useEffect } from 'react';
import './FavoritesButton.css';

interface Props { id: number }

const BotaoFavorito: React.FC<Props> = ({ id }) => {
  const [fav, setFav] = useState(false);
  useEffect(() => {
    const s = localStorage.getItem('fav_' + id);
    setFav(!!s);
  }, [id]);
  const toggle = () => {
    const next = !fav;
    setFav(next);
    if (next) localStorage.setItem('fav_' + id, '1'); else localStorage.removeItem('fav_' + id);
  };
  return <button className="botao-fav" onClick={toggle}>{fav ? '★' : '☆'}</button>;
};

export default BotaoFavorito;
