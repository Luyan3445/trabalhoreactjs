// Importo o React porque o componente usa JSX para montar a interface
import React from "react";
// Importo o CSS responsável pela estilização da página de contato
import "./Contact.css";

const Contact: React.FC = () => {
    return (
        // Div principal que envolve toda a página e aplica o layout padrão
        <div className="page contact-wrapper">

            {/* Card central onde ficam os textos e as informações */}
            <div className="contact-card">

                {/* Título da página */}
                <h2>Contato</h2>

                {/* Parágrafo inicial explicando quando a pessoa deve usar essa página */}
                <p>
                    Precisa de ajuda, deseja tirar dúvidas ou quer participar como
                    organização parceira? Fale conosco pelos canais abaixo.
                </p>

                {/* Lista com os meios de contato da plataforma */}
                <ul className="contact-list">

                    {/* Email */}
                    <li>
                        <i className="bi bi-envelope-fill"></i>
                        <span>
                            Email: <strong>contato@adotaplus.org</strong>
                        </span>
                    </li>

                    {/* Telefone */}
                    <li>
                        <i className="bi bi-telephone-fill"></i>
                        <span>
                            Telefone: <strong>(81) 4002-8922</strong>
                        </span>
                    </li>

                    {/* Localização */}
                    <li>
                        <i className="bi bi-geo-alt-fill"></i>
                        <span>Localização: Recife - PE</span>
                    </li>
                </ul>

                {/* Seção explicando como ONGs podem participar da plataforma */}
                <h3>Como colaborar</h3>

                <p>
                    ONGs interessadas em fazer parte da plataforma podem criar uma conta
                    especializada e cadastrar animais disponíveis para adoção.
                    Após o cadastro, basta entrar em contato pelo email acima
                    para iniciarmos o processo.
                </p>
            </div>

        </div>
    );
};

export default Contact;
