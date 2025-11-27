import React from 'react';
import { Pet } from '../types/pet';
import { Link } from 'react-router-dom';
import './PetCard.css';

interface Props { pet: Pet }

const CartaoPet: React.FC<Props> = ({ pet }) => {
    return (
        <div className="cartao-pet">
            <div className="cartao-pet-imagem">
                {pet.photo ? (
                    <img src={pet.photo} alt={pet.name} />
                ) : (
                    'Sem foto'
                )}
            </div>

            <h3>{pet.name}</h3>
            <p>{pet.breed} • {pet.age}</p>

            <Link to={`/pets/${pet.id}`} className="btn-detalhes">
                Ver detalhes
            </Link>
        </div>
    );
};

export default CartaoPet;
