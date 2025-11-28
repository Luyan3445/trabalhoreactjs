// Importo o React e o hook useState, que guarda os valores digitados no formulário
import React, { useState } from 'react';
// Importo o useNavigate para redirecionar a navegação após o cadastro
import { useNavigate } from 'react-router-dom';
// Importo o CSS com os estilos da página de cadastro de ONG
import './RegisterOng.css';

const RegisterOng: React.FC = () => {

    // Estados que guardam os valores digitados pelo usuário
    const [name, setName] = useState('');       // Nome da ONG
    const [cnpj, setCnpj] = useState('');       // CNPJ da ONG
    const [email, setEmail] = useState('');     // Email da ONG
    const [password, setPassword] = useState(''); // Senha

    // Hook do React Router que permite mudar de página
    const navigate = useNavigate();

    // Função chamada quando o formulário é enviado
    const handle = async (e: React.FormEvent) => {
        e.preventDefault(); // impede a página de recarregar

        // Requisição para o backend cadastrar a ONG
        const res = await fetch('http://localhost:3333/api/register-ong', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },

            // Envio dos dados preenchidos no formato JSON
            body: JSON.stringify({ name, email, password, cnpj })
        });

        // Se o backend responder OK, significa que deu tudo certo
        if (res.ok) {
            alert('ONG cadastrada com sucesso!');
            navigate('/login'); // redireciona para a página de login
        } else {
            // Se der erro, mostro um alerta simples
            alert('Erro ao realizar o cadastro.');
        }
    };

    return (
        // Div principal com a estrutura da página
        <div className="page ong-wrapper">

            <div className="ong-card">

                <h2>Cadastro de ONG</h2>

                {/* Formulário de cadastro */}
                <form onSubmit={handle} className="ong-form">

                    {/* Campo nome da ONG */}
                    <label>Nome da ONG
                        <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                    </label>

                    {/* Campo CNPJ (não obrigatório, mas pode ser informado) */}
                    <label>CNPJ
                        <input
                            value={cnpj}
                            onChange={e => setCnpj(e.target.value)}
                        />
                    </label>

                    {/* Campo email */}
                    <label>Email
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </label>

                    {/* Campo senha */}
                    <label>Senha
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </label>

                    {/* Botão de cadastrar */}
                    <button type="submit" className="btn-ong">
                        Cadastrar ONG
                    </button>
                </form>

            </div>
        </div>
    );
};

export default RegisterOng;
