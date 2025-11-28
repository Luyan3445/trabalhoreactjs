// Importo o React porque vou usar JSX para montar a estrutura visual da página
import React from "react";
// Importo o CSS responsável pelos estilos da Home
import "./Home.css";
// Importo o Link para navegar entre rotas sem recarregar a página
import { Link } from "react-router-dom";
// Importo a imagem usada no banner principal (hero)
import homeImg from "../img/home.jpg";

// Lista de recursos apresentados nos cards da página.
// Cada item tem um ícone, um título e um texto.
// Isso deixa o código organizado e facilita se no futuro quisermos adicionar mais cards.
const features = [
    {
        icon: "heart-fill",
        titulo: "Adoção responsável",
        texto: "Conheça pets preparados para um novo lar, com informações reais e confiáveis."
    },
    {
        icon: "shield-check",
        titulo: "ONGs verificadas",
        texto: "Trabalhamos apenas com ONGs parceiras, garantindo segurança e credibilidade."
    },
    {
        icon: "lightning-charge-fill",
        titulo: "Conexão rápida",
        texto: "Encontre o pet ideal através de filtros simples e buscas instantâneas."
    }
];

const Home: React.FC = () => {
    return (
        // Div principal que envolve toda a página
        <div className="page home-wrapper">

            {/* HERO → seção principal de destaque da Home */}
            <div className="hero">

                {/* Parte do texto do banner */}
                <div className="hero-text">
                    <h1>Encontre seu novo melhor amigo</h1>
                    <p>
                        Transforme vidas adotando um pet. Navegue pelo catálogo e descubra quem está esperando por você!
                    </p>

                    {/* Botão que leva para a página de pets */}
                    <Link to="/pets">
                        <button className="hero-btn">Ver Pets Disponíveis</button>
                    </Link>
                </div>

                {/* Imagem do lado direito do banner */}
                <img src={homeImg} alt="pets" />
            </div>

            {/* SECTION com os cards de destaque */}
            <div className="home-cards">
                {/* Uso o map para gerar um card para cada item da lista acima */}
                {features.map((item, index) => (
                    <div key={index} className="home-card">
                        {/* Ícone com Bootstrap Icons */}
                        <i className={`bi bi-${item.icon} home-card-icon`}></i>

                        {/* Título do card */}
                        <h3>{item.titulo}</h3>

                        {/* Texto do card */}
                        <p>{item.texto}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Home;
