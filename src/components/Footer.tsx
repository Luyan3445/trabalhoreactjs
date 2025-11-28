// Importo o React porque o componente usa JSX
import React from "react";
// Importo o CSS responsável por estilizar o rodapé
import "./Footer.css";

// Componente do rodapé da aplicação.
// Ele é bem simples, não recebe props e só retorna um <footer>.
const Rodape: React.FC = () => {
    return (
        // O elemento <footer> representa a parte inferior da página.
        // A classe "footer" aplica a estilização definida no arquivo CSS.
        <footer className="footer">
            {/* O <small> deixa o texto um pouco menor, como geralmente é o rodapé */}
            <small>Adota+</small>
        </footer>
    );
};

// Exporto o componente para ele ser usado em outras partes do site, como na Home ou nas páginas internas.
export default Rodape;
