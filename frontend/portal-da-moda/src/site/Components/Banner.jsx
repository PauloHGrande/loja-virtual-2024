import React from 'react';

function Banner() {
    return (
        <section id="banner">
            
            <div className="container">
                
                <div className="row">
                    
                    <div className="col-lg-6">
                        <h1>Uma plataforma de CRM simples de configurar e facil de usar.</h1>
                        <h4>Gerencie seus clientes em um unico lugar.</h4>
                        <a href="/app/novaconta" className="btn btn-dark btn-lg btn-banner">Criar uma Conta</a>
                        <a href="/app" className="btn btn-outline-light btn-lg btn-banner">Fazer Login</a>
                    </div>

                    <div className="col-lg-6">
                        <img src="Images/portal-da-moda.png" alt="portal-da-moda"/>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Banner;
