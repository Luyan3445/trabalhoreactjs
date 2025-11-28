// Importo o React e o useState, que vai guardar os valores digitados no formulário
import React, { useState } from 'react';
// Importo o useNavigate para redirecionar o usuário para outra página
import { useNavigate } from 'react-router-dom';
// Importo o hook de autenticação para saber se o usuário está logado
import useAuth from '../hooks/useAuth';
// Importo o CSS que estiliza a página de adicionar pet
import './AddPet.css';

const AddPet: React.FC = () => {

    // Pego o usuário logado. Se não tiver usuário, não pode cadastrar pet.
    const { user } = useAuth();

    // Função que permite trocar de página depois do cadastro
    const navigate = useNavigate();

    // Estados para guardar os valores do formulário
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [type, setType] = useState('dog');  // valor padrão
    const [breed, setBreed] = useState('');
    const [description, setDescription] = useState('');

    // Função que envia os dados do formulário
    const handle = async (e: React.FormEvent) => {
        e.preventDefault(); // impede recarregar a página

        // Se não tiver usuário logado, impede e envia para o login
        if (!user) {
            alert('Faça login para continuar.');
            navigate('/login');
            return;
        }

        // Envia os dados para a API usando fetch
        const res = await fetch('/api/pets', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },

            // Aqui envio o corpo da requisição com os dados do pet
            body: JSON.stringify({
                name,
                age,
                type,
                breed,
                description,
                location: 'Não informado' // só um texto padrão
            })
        });

        // Se a API responder OK, significa que deu certo
        if (res.ok) {
            alert('Pet adicionado com sucesso!');
            navigate('/pets'); // redireciona para a lista de pets
        } else {
            alert('Erro ao adicionar o pet.');
        }
    };

    return (
        // Estrutura da página
        <div className="page addpet-wrapper">

            <div className="addpet-card">
                <h2>Adicionar Pet</h2>

                {/* Formulário para cadastrar o pet */}
                <form onSubmit={handle} className="addpet-form">

                    {/* Campo nome do pet */}
                    <label>Nome
                        <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                    </label>

                    {/* Campo idade */}
                    <label>Idade
                        <input
                            value={age}
                            onChange={e => setAge(e.target.value)}
                            required
                        />
                    </label>

                    {/* Campo tipo → select com 3 opções */}
                    <label>Tipo
                        <select
                            value={type}
                            onChange={e => setType(e.target.value)}
                        >
                            <option value="dog">Cachorro</option>
                            <option value="cat">Gato</option>
                            <option value="other">Outro</option>
                        </select>
                    </label>

                    {/* Campo raça */}
                    <label>Raça
                        <input
                            value={breed}
                            onChange={e => setBreed(e.target.value)}
                        />
                    </label>

                    {/* Campo descrição */}
                    <label>Descrição
                        <textarea
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            rows={4}
                        />
                    </label>

                    {/* Botão que envia o formulário */}
                    <button type="submit" className="btn-addpet">
                        Adicionar Pet
                    </button>
                </form>

            </div>
        </div>
    );
};

export default AddPet;
