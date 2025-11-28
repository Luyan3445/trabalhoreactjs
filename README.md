falta adicionar as imagens dos pets
Api já ta feita
componetização também
falta só estilizar e arrumar algumas partes

Como executar:
1) Na raiz do projeto, rode `npm install`
2) No backend: `cd backend && npm install`
3) Rodar backend: `cd backend && npm run dev` (porta 3333)
4) Rodar frontend: `npm run dev` (na raiz)


📘 Adota+ — Sistema de Adoção de Pets

O Adota+ é uma aplicação web desenvolvida para facilitar o processo de adoção de animais.
O sistema conecta usuários, ONGs e pets disponíveis, permitindo visualizar detalhes, favoritar, filtrar, cadastrar animais e realizar solicitações de adoção.

Este projeto foi desenvolvido utilizando React + TypeScript (Frontend) e Node.js + Express (Backend).

🚀 Tecnologias Utilizadas
Frontend

React (Vite)

TypeScript

React Router DOM

Axios

Hooks personalizados

CSS modularizado

Backend

Node.js + Express

CORS

API REST

Base de dados fake em arquivo (data/pets.ts)

📂 Estrutura do Projeto
/frontend
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── types/
│   ├── img/
│   └── App.tsx
/backend
├── data/
├── server.ts
└── package.json

🐶 Principais Funcionalidades
👤 Usuários

Criar conta como Pessoa

Criar conta como ONG

Fazer login

Manter sessão salva (localStorage)

🐾 Pets

Listar pets disponíveis

Buscar por nome

Filtrar por tipo (cachorro, gato, outros)

Ver detalhes de cada pet

Favoritar e desfavoritar pets

Adicionar novos pets (usuário logado)

Solicitar adoção via formulário

📨 Adoção

Envio de solicitação de adoção

Exibição de modal com formulário

Feedback visual de envio bem-sucedido

🌐 Rotas do Sistema
Frontend
Rota	Página
/	Home
/pets	Lista de Pets
/pets/:id	Detalhes do Pet
/about	Sobre
/contact	Contato
/login	Login
/cadastro	Escolha de Cadastro
/register-person	Cadastro de Pessoa
/register-ong	Cadastro de ONG
/add-pet	Adicionar Pet
🛠 API — Endpoints Disponíveis
🔹 GET /api/pets

Lista todos os pets (com filtros opcionais).

🔹 GET /api/pets/:id

Retorna os detalhes de um pet.

🔹 POST /api/pets

Adiciona um novo pet.

🔹 POST /api/login

Autenticação de usuário (email + senha).

🔹 POST /api/register-person

Cadastro de pessoa.

🔹 POST /api/register-ong

Cadastro de ONG.

🔹 POST /api/adopt

Registra uma solicitação de adoção.

📦 Backend Fake Database

O sistema utiliza um arquivo pets.ts simulando um banco de dados, contendo:

id

nome

idade

tipo

raça

descrição

imagem

localização

🖥 Como Rodar o Projeto
🔧 Frontend
cd frontend
npm install
npm run dev

🔧 Backend
cd backend
npm install
npm run dev


A API roda por padrão na porta:

http://localhost:3333

👥 Autores / Equipe

Lucas Neves
João Alberto
Rodrigo Cunha
Gustavo Hilanda
Luyan Barbosa

Trabalho voltado à prática de:

React

APIs REST

Hooks

TypeScript

Organização do código

UX/UI simples para adoção de pets

📄 Licença

Este projeto é acadêmico e livre para estudo.