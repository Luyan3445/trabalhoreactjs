// Importo useState e useEffect, que são hooks essenciais do React.
// useState guarda valores (como o usuário logado).
// useEffect executa funções quando algo muda.
import { useState, useEffect } from 'react';

// Aqui defino o tipo de usuário. Pode ser um objeto com id, name, email
// ou pode ser null quando ninguém está logado.
type User = { id: number; name: string; email: string } | null;

// Chave usada para salvar os dados do usuário no localStorage
const storageKey = 'adota_user';

// Esse é um hook personalizado chamado useAuth.
// Ele cuida de toda a lógica de autenticação da aplicação.
export default function useAuth() {

    // Estado que guarda o usuário atual.
    // Aqui eu inicializo o valor pegando do localStorage (se existir).
    const [user, setUser] = useState<User>(() => {
        try {
            const raw = localStorage.getItem(storageKey);
            return raw ? JSON.parse(raw) : null; // Se tiver dado salvo, converte de JSON para objeto
        } catch {
            return null; // Se der erro, não crasha e só retorna null
        }
    });

    // Sempre que o valor de user muda, esse efeito salva o novo valor no localStorage.
    // Assim, mesmo que o usuário recarregue o site, ele continua logado.
    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(user));
    }, [user]); // Só executa quando user muda

    // Função de login, chamada pela página de Login.
    async function login(email: string, password: string) {

        // Aqui faço a requisição para o backend usando fetch.
        // Envio email e senha em formato JSON.
        const res = await fetch('http://localhost:3333/api/login', {
            method: 'POST',
            headers:{ 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        // Se o backend retornar erro, o login falha.
        if (!res.ok) return false;

        // Se deu certo, converto o retorno em JSON.
        const data = await res.json();

        // Guardo o usuário retornado no estado.
        setUser(data.user);

        return true; // Login bem-sucedido
    }

    // Função de logout. Remove o usuário do estado e do localStorage.
    function logout() {
        setUser(null); // Usuário deslogado
        localStorage.removeItem(storageKey); // Remove do navegador
    }

    // Retorno do hook. Assim outras partes do sistema podem usar:
    // user → saber se alguém está logado
    // login → tentar logar
    // logout → sair da conta
    return { user, login, logout };
}

