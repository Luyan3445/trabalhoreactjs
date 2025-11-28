// Importo o React e o useState, que vai guardar os valores digitados no formulário
import React, { useState } from 'react';
// Importo o useNavigate para redirecionar o usuário para outra página depois do login
import { useNavigate } from 'react-router-dom';
// Importo o hook de autenticação, onde está a função login
import useAuth from '../hooks/useAuth';
// Importo o CSS que estiliza a página de login
import './Login.css';

const Login: React.FC = () => {

    // Estados que guardam o que o usuário digitou no email e senha
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Pego a função login do hook useAuth
    const { login } = useAuth();

    // Crio função para navegar entre rotas
    const navigate = useNavigate();

    // Função chamada quando o formulário é enviado
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // impede recarregar a página

        // Tenta logar chamando a função login do hook
        const ok = await login(email, password);

        // Se o backend aceitar, redireciona para a Home
        if (ok) {
            navigate('/');
        } else {
            // Se der erro, mostra mensagem aqui mesmo
            alert('Credenciais inválidas.');
        }
    };

    // Botão de voltar para a tela onde a pessoa escolhe o tipo de cadastro
    const handleBack = () => {
        navigate('/cadastro');
    };

    return (
        // Estrutura principal da página
        <div className="page login-wrapper">

            <div className="login-card">

                {/* Botão de voltar para a escolha de cadastro */}
                <button className="btn-voltar" onClick={handleBack}>
                    Escolha de cadastro
                </button>

                <h2>Entrar</h2>

                {/* Formulário de login */}
                <form onSubmit={handleSubmit} className="login-form">

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

                    {/* Botão enviar/login */}
                    <button type="submit" className="btn-login">
                        Entrar
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Login;
