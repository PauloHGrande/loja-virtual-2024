import React from 'react';

function Features() {
    return (
        <section id="features">
            
            <div className="container">
                
                <div className="row">
                    
                    <div className="col-lg-4 feature-box">
                        <i className="icon fa-solid fa-heart fa-5x"></i>
                        <h3>Facil de usar</h3>
                        <p>O sistema possui uma interface muito simples e facil de utilizar.</p>
                    </div>

                    <div className="col-lg-4 feature-box">
                        <i className="icon fa-solid fa-globe fa-5x"></i>
                        <h3>Em qualquer lugar</h3>
                        <p>Gerencie seu fluxo de negocios de forma eficiente, onde quer que voce esteja.</p>
                    </div>

                    <div className="col-lg-4 feature-box">
                        <i className="icon fa-solid fa-poo fa-5x"></i>
                        <h3>Organizacao e tudo</h3>
                        <p>Tenha sua carteira de clientes sempre muito bem organizada.</p>
                    </div>                    

                </div>

            </div>

        </section>
    );
}

export default Features;
