import React from 'react';
import './SearchBar.css';

interface Props { value: string; onChange: (v: string) => void }

const BarraBusca: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="barra-busca">
      <input value={value} onChange={e => onChange(e.target.value)} placeholder="Buscar por nome..." />
    </div>
  );
};

export default BarraBusca;
