import React from 'react';

function Precos() {
    return (
        <section id="preco">
            
            <div className="container">
                
                <div className="row text-center">

                    <div className="titulo">
                        <h1>Plano e Precos</h1>
                        <p>Comece sua avalizacao gratuita. Nao e necessario carta de credito.</p>
                    </div>

                </div>

                <div className="row text-center">

                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <h1>Free</h1>
                            </div>
                            <div className="card-body">
                                <h2>R$ 0,00</h2>
                                <p>Ate 50 cliente</p>
                                <p>Sem Suporte</p>
                                <button className="btn btn-lg btn-outline-primary">Comecar Agora</button>
                            </div>                            
                        </div>
                    </div>  

                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <h1>Pro</h1>
                            </div>
                            <div className="card-body">
                                <h2>R$ 49,90 <small className="text-muted"> /mes</small></h2>
                                <p>Ate 200 cliente</p>
                                <p>Suporte por E-Mail</p>
                                <button className="btn btn-lg btn-outline-primary">Assinar Agora</button>
                            </div>                            
                        </div>
                    </div>  

                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <h1>Premiun</h1>
                            </div>
                            <div className="card-body">
                                <h2>R$ 99,90 <small className="text-muted"> /mes</small></h2>
                                <p>cliente Ilimitado</p>
                                <p>Suporte por Telefone</p>
                                <button className="btn btn-lg btn-outline-primary">Assinar Agora</button>
                            </div>                            
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Precos;
