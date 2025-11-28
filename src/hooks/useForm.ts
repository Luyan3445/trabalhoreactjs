// Importo o hook useState, que vai guardar os valores do formulário
import { useState } from 'react';

// Esse é um hook personalizado para ajudar a controlar formulários.
// Ele recebe um objeto inicial (initial) com todos os campos do formulário.
export default function useForm<T extends Record<string, any>>(initial: T) {

    // Aqui eu armazeno os valores do formulário.
    // No começo, o formulário recebe o objeto inicial passado na função.
    const [values, setValues] = useState(initial);

    // Função usada para alterar apenas um campo específico do formulário
    // field → nome do campo (ex: "email", "senha")
    // value → novo valor do campo
    function setField<K extends keyof T>(field: K, value: T[K]) {

        // Aqui eu faço uma atualização parcial do objeto.
        // Eu pego o objeto anterior (...prev) e substituo só o campo informado.
        setValues(prev => ({
            ...prev,       // mantém os outros campos iguais
            [field]: value // atualiza apenas o campo que o usuário está mexendo
        }));
    }

    // Retorno o objeto com:
    // - values → todos os valores do formulário
    // - setField → função para atualizar um campo
    // - setValues → caso eu queira atualizar tudo de uma vez
    return { values, setField, setValues };
}
