import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Pet } from '../types/pet';
import Carregando from '../components/Loading';
import MensagemErro from '../components/ErrorMessage';
import FormAdoção from '../components/AdoptionForm';
import './PetDetails.css';

const PetDetails: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pet, setPet] = useState<Pet | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const adoptBtnRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        setLoading(true);
        axios
            .get<Pet>(`http://localhost:3333/api/pets/${id}`)
            .then((res) => setPet(res.data))
            .catch(() => setError('Pet não encontrado'))
            .finally(() => setLoading(false));
    }, [id]);

    const handleBack = useCallback(() => navigate('/pets'), [navigate]);

    if (loading) return <Carregando />;
    if (error) return <MensagemErro message={error} />;

    return (
        <div className="details-container">

            <button className="btn-voltar" onClick={handleBack}>← Voltar</button>

            <div className="details-card">

                <div className="details-image">
                    {pet?.photo ? (
                        <img src={pet.photo} alt={pet.name} />
                    ) : (
                        <div className="sem-foto">Sem foto</div>
                    )}
                </div>

                <div className="details-info">
                    <h1>{pet?.name}</h1>

                    <p className="descricao">{pet?.description}</p>

                    <div className="info-list">
                        <p><strong>Raça:</strong> {pet?.breed || "Não informado"}</p>
                        <p><strong>Idade:</strong> {pet?.age}</p>
                        <p><strong>Local:</strong> {pet?.location}</p>
                    </div>

                    <button
                        ref={adoptBtnRef}
                        className="btn-adotar"
                        onClick={() => adoptBtnRef.current?.focus()}
                    >
                        Adotar este pet
                    </button>

                    <FormAdoção petId={pet!.id} />
                </div>

            </div>
        </div>
    );
};

export default PetDetails;
