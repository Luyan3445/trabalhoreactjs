// Importo o React porque o componente usa JSX
import React from 'react';
// Importo o CSS que estiliza a mensagem de erro
import './ErrorMessage.css';

// Aqui defino a interface que diz que o componente vai receber uma única prop chamada "message"
interface Props {
    message: string
}

// Esse é o componente de mensagem de erro.
// Ele é bem simples: só recebe o texto da mensagem e mostra dentro de uma div.
// A classe CSS "mensagem-erro" deixa o texto vermelho ou com algum estilo de alerta.
const MensagemErro: React.FC<Props> = ({ message }) =>
    <div className="mensagem-erro">{message}</div>;

// Exporto o componente para poder usar em outros arquivos, como em páginas de listagem.
export default MensagemErro;
