// Importo o React e o useState, que serve para guardar valores digitados nos inputs
import React, { useState } from 'react';
// O axios é usado para fazer requisições para a API
import axios from 'axios';
// CSS do formulário
import './AdoptionForm.css';

// Aqui defino a interface que diz que esse componente vai receber um petId
interface Props {
    petId: number;
}

// Componente do formulário de adoção
const FormAdocao: React.FC<Props> = ({ petId }) => {

    // Estados para guardar os dados que o usuário digita
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    // Estados para mostrar se deu certo ou errado
    const [sucesso, setSucesso] = useState(false);
    const [erro, setErro] = useState(false);

    // Essa função é chamada quando o usuário aperta o botão de enviar
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // evita recarregar a página

        // Envia os dados para o backend usando axios
        axios.post('http://localhost:3333/api/adopt', {
            petId,
            nome,
            email,
            mensagem
        })
            .then(() => {
                // Se deu tudo certo:
                setSucesso(true);   // mostra mensagem de sucesso
                setErro(false);     // esconde erro
                setNome('');        // limpa os campos
                setEmail('');
                setMensagem('');
            })
            .catch(() => {
                // Se deu errado:
                setErro(true);      // mostra erro
                setSucesso(false);  // esconde sucesso
            });
    };

    return (
        <div className="form-card">

            {/* Título do formulário */}
            <h2>Formulário de Adoção</h2>

            {/* Formulário em si */}
            <form onSubmit={handleSubmit}>

                {/* Campo de nome */}
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

                {/* Campo de email */}
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

                {/* Campo de texto onde o usuário explica o motivo da adoção */}
                <div className="form-group">
                    <label>Por que deseja adotar este pet?</label>
                    <textarea
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                        placeholder="Escreva uma breve mensagem"
                        rows={4}
                    />
                </div>

                {/* Botão de enviar os dados */}
                <button type="submit" className="btn-enviar">
                    Enviar solicitação
                </button>
            </form>

            {/* Se a solicitação for enviada com sucesso */}
            {sucesso && (
                <p className="mensagem-sucesso">
                    Solicitação enviada com sucesso! Em breve entraremos em contato.
                </p>
            )}

            {/* Se der erro no envio */}
            {erro && (
                <p className="mensagem-erro">
                    Ocorreu um erro. Tente novamente.
                </p>
            )}

        </div>
    );
};

export default FormAdocao;

