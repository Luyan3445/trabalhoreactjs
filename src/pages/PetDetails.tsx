// Importo React e hooks importantes para carregar dados e controlar estados
import React, { useEffect, useState } from 'react';
// useParams pega o ID que vem pela URL /pets/:id
// useNavigate permite voltar para outra página
import { useParams, useNavigate } from 'react-router-dom';
// axios usado para fazer requisições ao backend
import axios from 'axios';
// Tipo do objeto Pet
import { Pet } from '../types/pet';

// Componentes reutilizáveis
import Carregando from '../components/Loading';
import MensagemErro from '../components/ErrorMessage';
import FormAdoção from '../components/AdoptionForm';
import BotaoFavorito from '../components/FavoritesButton';

// CSS da página
import './PetDetails.css';

const PetDetails: React.FC = () => {

    // Pegando o ID do pet pela URL
    const { id } = useParams<{ id: string }>();

    // Função para navegar para outra rota
    const navigate = useNavigate();

    // Estados principais da página
    const [pet, setPet] = useState<Pet | null>(null);     // os dados do pet
    const [loading, setLoading] = useState(true);         // controle de carregamento
    const [error, setError] = useState<string | null>(null); // mensagem de erro
    const [isFav, setIsFav] = useState<boolean>(false);   // se o pet é favorito ou não

    // Controla se o formulário de adoção aparece
    const [showForm, setShowForm] = useState(false);

    // Buscar os dados do pet quando a página for carregada
    useEffect(() => {
        if (!id) return; // se não tiver ID, não faz nada

        setLoading(true); // começa carregando

        axios
            .get<Pet>(`http://localhost:3333/api/pets/${id}`) // chamada à API
            .then((res) => setPet(res.data))                 // salva os dados
            .catch(() => setError('Pet não encontrado'))     // erro caso o ID não exista
            .finally(() => setLoading(false));               // encerra o carregamento
    }, [id]);

    // Verificar se o pet está nos favoritos assim que o pet for carregado
    useEffect(() => {
        if (!pet) return;

        const key = 'fav_' + pet.id;           // chave no localStorage
        setIsFav(!!localStorage.getItem(key)); // converte para booleano
    }, [pet]);

    // Atualiza o estado quando clica no botão de favorito
    const handleFavChange = (petId: number, newVal: boolean) => {
        setIsFav(newVal);
    };

    // Se estiver carregando, mostra componente de carregamento
    if (loading) return <Carregando />;

    // Se deu erro ou pet veio null
    if (error || !pet) return <MensagemErro message={error ?? "Erro"} />;

    return (
        <div className="details-container">

            {/* Botão de voltar para a lista de pets */}
            <button className="btn-voltar" onClick={() => navigate('/pets')}>
                ← Voltar
            </button>

            {/* Card principal com a imagem e informações do pet */}
            <div className="details-card">

                {/* Imagem do pet */}
                <div className="details-image">
                    {pet.photo ? (
                        <img
                            src={`http://localhost:3333${pet.photo}`}
                            alt={pet.name}
                            className="img-detalhe"
                        />
                    ) : (
                        <div className="sem-foto">Sem foto</div>
                    )}
                </div>

                {/* Informações do pet */}
                <div className="details-info">

                    {/* Título + botão de favoritos */}
                    <h1 className="titulo-pet">
                        {pet.name}
                        <BotaoFavorito id={pet.id} onChange={handleFavChange} />
                    </h1>

                    {/* Texto indicando se ele é favorito */}
                    <p className="favorito-status">
                        {isFav ? "⭐ Este pet está nos seus favoritos" : "☆ Não favoritado"}
                    </p>

                    {/* Descrição do pet */}
                    <p className="descricao">{pet.description}</p>

                    {/* Informações básicas do pet */}
                    <div className="info-list">
                        <p><strong>Raça:</strong> {pet.breed || "Não informado"}</p>
                        <p><strong>Idade:</strong> {pet.age}</p>
                        <p><strong>Local:</strong> {pet.location}</p>
                    </div>

                    {/* Botão para abrir o formulário de adoção */}
                    <button className="btn-adotar" onClick={() => setShowForm(true)}>
                        Quero Adotar
                    </button>
                </div>
            </div>

            {/* Modal do formulário de adoção */}
            {showForm && (
                <div className="modal-overlay" onClick={() => setShowForm(false)}>

                    <div className="modal-content" onClick={e => e.stopPropagation()}>

                        <button className="modal-close" onClick={() => setShowForm(false)}>
                            ×
                        </button>

                        <h2 className="modal-titulo">Formulário de Adoção</h2>

                        {/* Reutilizo o componente de formulário e passo o ID do pet */}
                        <FormAdoção petId={pet.id} />
                    </div>
                </div>
            )}

        </div>
    );
};

export default PetDetails;
