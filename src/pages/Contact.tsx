
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="page card">
      <h2>Contato</h2>
      <p>Tem dúvidas ou quer colaborar? Entre em contato:</p>
      <ul>
        <li>Email: <strong>adotaplus.projeto@exemplo.edu.br</strong></li>
        <li>Telefone: <strong>(81) 99999-9999</strong></li>
        <li>Local: Recife - PE</li>
      </ul>

      <h3>Como colaborar</h3>
      <p>Se você representa uma ONG e deseja cadastrar pets no sistema, faça um cadastro de ONG na página dedicada e entre em contato através do email acima.</p>
    </div>
  );
};

export default Contact;
