import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import homeImg from "../img/home.jpg";

const features = [
    {
        titulo: "Adoção responsável",
        texto: "Conheça pets preparados para um novo lar, com informações reais e confiáveis."
    },
    {
        titulo: "ONGs verificadas",
        texto: "Trabalhamos apenas com ONGs parceiras, garantindo segurança e credibilidade."
    },
    {
        titulo: "Conexão rápida",
        texto: "Encontre o pet ideal através de filtros simples e buscas instantâneas."
    }
];

const Home: React.FC = () => {
    return (
        <div className="page home-wrapper">

            {/* Hero */}
            <div className="hero">
                <div className="hero-text">
                    <h1>Encontre seu novo melhor amigo</h1>
                    <p>Transforme vidas adotando um pet. Navegue pelo catálogo e descubra quem está esperando por você!</p>

                    <Link to="/pets">
                        <button className="hero-btn">Ver Pets Disponíveis</button>
                    </Link>
                </div>

                <img src={homeImg} alt="pets" />
            </div>

            {/* Cards de destaque */}
            <div className="home-cards">
                {features.map((item, index) => (
                    <div key={index} className="home-card">
                        <h3>{item.titulo}</h3>
                        <p>{item.texto}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Home;
