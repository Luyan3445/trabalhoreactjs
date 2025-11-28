import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cabecalho from './components/Header';
import Rodape from './components/Footer';
import Home from './pages/Home';
import Pets from './pages/Pets';
// Importo todas as páginas que serão usadas nas rotas da aplicação.
// Cada uma corresponde a uma tela diferente.
import PetDetails from './pages/PetDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import RegisterPerson from './pages/RegisterPerson';
import RegisterOng from './pages/RegisterOng';
import AddPet from './pages/AddPet';
import CadastroEscolha from './pages/CadastroEscolha';

// O App é o componente principal da aplicação.
// Ele é responsável por montar o layout geral e as rotas.
const App: React.FC = () => {
    return (
        <div className="app">

            {/* Cabeçalho fixo em todas as páginas */}
            <Cabecalho />

            {/* Área principal onde as páginas aparecem */}
            <main>

                {/* Aqui ficam todas as rotas do sistema.
            Cada Route define qual componente deve aparecer para cada URL. */}
                <Routes>

                    {/* Página inicial */}
                    <Route path="/" element={<Home />} />

                    {/* Listagem de pets */}
                    <Route path="/pets" element={<Pets />} />

                    {/* Página de detalhes de um pet (pega o ID pela URL) */}
                    <Route path="/pets/:id" element={<PetDetails />} />

                    {/* Página "Sobre" */}
                    <Route path="/about" element={<About />} />

                    {/* Página "Contato" */}
                    <Route path="/contact" element={<Contact />} />

                    {/* Login do usuário */}
                    <Route path="/login" element={<Login />} />

                    {/* Cadastro de Pessoa */}
                    <Route path="/register-person" element={<RegisterPerson />} />

                    {/* Cadastro de ONG */}
                    <Route path="/register-ong" element={<RegisterOng />} />

                    {/* Cadastro de Pet (somente para usuários logados) */}
                    <Route path="/add-pet" element={<AddPet />} />

                    {/* Tela para escolher entre cadastro de pessoa ou ONG */}
                    <Route path="/cadastro" element={<CadastroEscolha />} />

                </Routes>
            </main>

            {/* Rodapé fixo em todas as páginas */}
            <Rodape />
        </div>
    );
};

export default App;
