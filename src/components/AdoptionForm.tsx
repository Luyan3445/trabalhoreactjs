import React, { useState } from 'react';
import axios from 'axios';
import './AdoptionForm.css';

interface Props {
    petId: number;
}

const FormAdocao: React.FC<Props> = ({ petId }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [sucesso, setSucesso] = useState(false);
    const [erro, setErro] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        axios.post('http://localhost:3333/api/adopt', {
            petId,
            nome,
            email,
            mensagem
        })
            .then(() => {
                setSucesso(true);
                setErro(false);
                setNome('');
                setEmail('');
                setMensagem('');
            })
            .catch(() => {
                setErro(true);
                setSucesso(false);
            });
    };

    return (
        <div className="form-card">
            <h2>Formulário de Adoção</h2>

            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Seu nome</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Digite seu nome"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Seu e-mail</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="exemplo@email.com"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Por que deseja adotar este pet?</label>
                    <textarea
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                        placeholder="Escreva uma breve mensagem"
                        rows={4}
                    />
                </div>

                <button type="submit" className="btn-enviar">
                    Enviar solicitação
                </button>

            </form>

            {sucesso && (
                <p className="mensagem-sucesso">
                    Solicitação enviada com sucesso! Em breve entraremos em contato.
                </p>
            )}

            {erro && (
                <p className="mensagem-erro">
                    Ocorreu um erro. Tente novamente.
                </p>
            )}

        </div>
    );
};

export default FormAdocao;
