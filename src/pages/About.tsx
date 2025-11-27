
import React from 'react';
import './Home.css';

const About: React.FC = () => {
  return (
    <div className="page card">
      <h2>Sobre o Adota+</h2>
      <p>O Adota+ é um projeto acadêmico que simula uma plataforma de adoção de animais. Nosso objetivo é conectar tutores responsáveis e ONGs, oferecendo um catálogo simples de pets para adoção, formulário de contato e processos básicos de registro e autenticação para demonstração.</p>

      <h3>Missão</h3>
      <p>Conectar vidas: facilitar a adoção responsável por meio de informação clara, segurança básica e uma interface simples.</p>

      <h3>Equipe</h3>
      <ul>
        <li>Lucas — Frontend & Integração</li>
        <li>Integrante 2 — Backend</li>
        <li>Integrante 3 — Design</li>
        <li>Integrante 4 — Testes</li>
        <li>Integrante 5 — Documentação</li>
      </ul>

      <h3>Tecnologias</h3>
      <p>React + TypeScript, Vite, Node (Express) — backend minimal em TypeScript.</p>
    </div>
  );
};

export default About;
