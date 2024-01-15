import React from 'react';

function Footer() {
    const ano = new Date().getFullYear();
    
    return (
        <div>
            <p>Desenvolvido por Fantasma... {ano}</p>
        </div>
    );
}

export default Footer;
