// Importo o React porque vou usar JSX
import React from 'react';
// Importo o CSS responsável pelo estilo da barra de busca
import './SearchBar.css';

// Defino as props que o componente recebe:
// - value: texto atual digitado na busca
// - onChange: função que é chamada sempre que o usuário digita algo
interface Props {
    value: string;
    onChange: (v: string) => void
}

// Componente da barra de busca usado na tela de listagem de pets
const BarraBusca: React.FC<Props> = ({ value, onChange }) => {
    return (
        // Div com a classe que estiliza o input
        <div className="barra-busca">

            {/* Campo de input da busca.
          - value controla o texto que aparece no input
          - onChange dispara a função recebida e envia o novo valor digitado
          Esse padrão se chama "input controlado" no React.
      */}
            <input
                value={value}
                onChange={e => onChange(e.target.value)}
                placeholder="Buscar por nome..."
            />
        </div>
    );
};

// Exporto o componente para ser usado no Pets.tsx
export default BarraBusca;
