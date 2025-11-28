// Importo o React porque o componente usa TSX
import React from 'react';
// Importo o CSS responsável por estilizar
import './FilterBar.css';

// Aqui eu defino as props que o componente recebe.
// "value" é o valor atual do filtro
// "onChange" é a função que vai ser chamada quando o usuário trocar a opção
interface Props {
    value: string;
    onChange: (v: string) => void
}

const BarraFiltro: React.FC<Props> = ({ value, onChange }) => {
    return (
        <div className="barra-filtro">

            {/* Esse select é o filtro. Ele mostra as opções e quando o usuário muda,
          eu chamo a função onChange passando o novo valor */}
            <select
                value={value}
                onChange={e => onChange(e.target.value)}
            >

                {/* Opções que o usuário pode escolher no filtro */}
                <option value="">Todos</option>
                <option value="dog">Cães</option>
                <option value="cat">Gatos</option>
                <option value="other">Outros</option>
            </select>
        </div>
    );
};

export default BarraFiltro;
