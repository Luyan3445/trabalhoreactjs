// Importo o React e o useState, que é usado para guardar os valores digitados no formulário
import React, { useState } from 'react';
// Importo o useNavigate, que permite mudar de página sem recarregar o site
import { useNavigate } from 'react-router-dom';
// Importo o CSS com os estilos da página
import './RegisterPerson.css';

const RegisterPerson: React.FC = () => {

    // Estados que guardam os dados digitados pelo usuário
    const [name, setName] = useState('');       // Nome da pessoa
    const [email, setEmail] = useState('');     // Email
    const [password, setPassword] = useState(''); // Senha

    // Estado para controlar se o modal de confirmação aparece
    const [showModal, setShowModal] = useState(false);

    // Hook do React Router para navegação
    const navigate = useNavigate();

    // Função que será executada ao enviar o formulário
    const handle = async (e: React.FormEvent) => {
        e.preventDefault(); // impede que a página recarregue

        // Envio dos dados para o backend criando um novo cadastro de pessoa
        const res = await fetch('http://localhost:3333/api/register-person', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });

        // Se deu certo ele redireciona para o login
        if (res.ok) {
            alert('Cadastro realizado com sucesso!');
            navigate('/login');
        } else {
            alert('Erro no cadastro.');
        }
    };

    // Função do botão "voltar"
    const handleBack = () => {

        // Verifico se a pessoa já digitou alguma coisa
        const hasData =
            name.trim() !== '' ||
            email.trim() !== '' ||
            password.trim() !== '';

        // Se o formulário estiver vazio, só volta direto
        if (!hasData) {
            navigate('/cadastro');
            return;
        }

        // Se tiver dados digitados → abre o modal de confirmação
        setShowModal(true);
    };

    // Função para confirmar volta e perder os dados
    const confirmBack = () => {
        setShowModal(false);
        navigate('/cadastro');
    };

    // Fecha o modal e continua na página
    const cancelBack = () => {
        setShowModal(false);
    };

    return (
        <div className="page register-wrapper">

            <div className="register-card">

                {/* Botão de voltar */}
                <button className="btn-voltar" onClick={handleBack}>
                    Voltar
                </button>

                <h2>Cadastro de Pessoa</h2>

                {/* Formulário principal */}
                <form onSubmit={handle} className="register-form">

                    {/* Campo de nome */}
                    <label>Nome
                        <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                    </label>

                    {/* Campo de email */}
                    <label>Email
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </label>

                    {/* Campo de senha */}
                    <label>Senha
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </label>

                    {/* Botão de enviar formulário */}
                    <button type="submit" className="btn-register">
                        Cadastrar
                    </button>
                </form>
            </div>

            {/* Modal de confirmação — aparece apenas se showModal for true */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-box">

                        <h3>Tem certeza que deseja voltar?</h3>
                        <p>Os dados preenchidos serão perdidos.</p>

                        {/* Botões dentro do modal */}
                        <div className="modal-buttons">

                            {/* Botão de cancelar a ação de sair */}
                            <button className="btn-cancel" onClick={cancelBack}>
                                Cancelar
                            </button>

                            {/* Botão de confirmar e perder os dados */}
                            <button className="btn-confirm" onClick={confirmBack}>
                                Sim, voltar
                            </button>
                        </div>

                    </div>
                </div>
            )}

        </div>
    );
};

export default RegisterPerson;
