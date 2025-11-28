import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <div className="page about-wrapper">

            <div className="about-card">
                <h2>Sobre o Adota+</h2>
                <p>
                    O Adota+ é uma plataforma criada com o propósito de aproximar pessoas
                    interessadas em adotar e instituições responsáveis por animais resgatados.
                    Nosso foco é a adoção consciente, baseada em informações claras,
                    transparência e acessibilidade.
                </p>

                <h3>Missão</h3>
                <p>
                    Promover conexões que gerem impacto real: facilitar a adoção responsável,
                    oferecer visibilidade a animais disponíveis e simplificar o processo para
                    tutores e organizações parceiras.
                </p>

                <h3>Valores</h3>
                <ul>
                    <li>Adoção responsável</li>
                    <li>Transparência e cuidado com os animais</li>
                    <li>Facilidade de uso e acessibilidade</li>
                    <li>Parceria com ONGs dedicadas</li>
                </ul>

                <h3>Tecnologias</h3>
                <p>
                    O projeto utiliza React + TypeScript no frontend, Vite para desenvolvimento rápido,
                    e um backend minimalista em Node.js/Express integrado via API
                </p>
            </div>

        </div>
    );
};

export default About;
