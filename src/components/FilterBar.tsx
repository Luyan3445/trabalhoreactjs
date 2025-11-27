import React from 'react';
import './FilterBar.css';

interface Props { value: string; onChange: (v: string) => void }

const BarraFiltro: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="barra-filtro">
      <select value={value} onChange={e => onChange(e.target.value)}>
        <option value="">Todos</option>
        <option value="dog">Cães</option>
        <option value="cat">Gatos</option>
        <option value="other">Outros</option>
      </select>
    </div>
  );
};

export default BarraFiltro;
