import React from 'react';
import './ErrorMessage.css';

interface Props { message: string }

const MensagemErro: React.FC<Props> = ({ message }) => <div className="mensagem-erro">{message}</div>;

export default MensagemErro;
