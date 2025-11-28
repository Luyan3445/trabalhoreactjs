// Importo o React porque vou usar JSX para construir o componente
import React from 'react';
// Importo o tipo "Pet" para garantir que o objeto recebido tem os campos corretos
import { Pet } from '../types/pet';
// Importo o Link para redirecionar para a página de detalhes do pet sem recarregar a página
import { Link } from 'react-router-dom';
// Importo o CSS responsável pelo estilo do card
import './PetCard.css';

// Defino as props que o componente recebe: ele vai receber um objeto "pet" do tipo Pet
interface Props {
    pet: Pet;
}

// Componente responsável por mostrar o card de um pet na listagem
const CartaoPet: React.FC<Props> = ({ pet }) => {
    return (
        <div className="cartao-pet">

            {/* Área onde fica a imagem do pet */}
            <div className="cartao-pet-imagem">
                {pet.photo ? (
                    // Se o pet tiver foto, coloca a imagem
                    <img
                        src={`http://localhost:3333${pet.photo}`} // caminho completo da imagem
                        alt={pet.name}
                    />
                ) : (
                    // Caso não tenha foto, exibe um bloco cinza escrito "Sem foto"
                    <div className="sem-foto">Sem foto</div>
                )}
            </div>

            {/* Nome do pet */}
            <h3>{pet.name}</h3>

            {/* Mostra a raça (ou texto padrão) e idade do animal */}
            <p>
                {pet.breed || "Raça não informada"} • {pet.age}
            </p>

            {/* Botão que leva para a página com os detalhes do pet */}
            <Link to={`/pets/${pet.id}`} className="btn-detalhes">
                Ver detalhes
            </Link>
        </div>
    );
};

// Exporto o componente para ser usado na página de listagem (Pets.tsx)
export default CartaoPet;
