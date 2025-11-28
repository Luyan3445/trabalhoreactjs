// Importo o React porque o componente usa JSX
import React from 'react';
// Importo o CSS responsável pela animação ou estilo de "carregando"
import './Loading.css';

// Componente simples que mostra um texto de carregamento.
// Ele é usado quando alguma informação ainda está sendo buscada da API.
const Carregando: React.FC = () =>
    <div className="carregando">
        {/* Texto que aparece enquanto a página está carregando */}
        Carregando...
    </div>;

// Exporto o componente para ser usado em páginas como Pets, PetDetails, etc.
export default Carregando;
