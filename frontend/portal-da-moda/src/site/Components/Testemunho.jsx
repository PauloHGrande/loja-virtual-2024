import React from 'react';

function Testemunho() {
    return (
        <section id="testemunho">
            
            <div className="container">
                
                <div id="carouselExampleInterval" className="carousel carousel-dark slide" data-bs-ride="carousel">

                    <div className="carousel-inner">

                        <div className="carousel-item active" data-bs-interval="5000">
                            <h2>Excelente ferramenta para acompanhamento do dia a dia. sendo flexivel o suficiente</h2>
                            <img src="Images/Fantasma.jpg" alt=""/>
                            <em>Paulo Henrique - Campinas</em>
                        </div>

                        <div className="carousel-item" data-bs-interval="3000">
                            <h2>Excelente ferramenta para acompanhamento do dia a dia. sendo flexivel o suficiente</h2>
                            <img src="Images/Fantasma.jpg" alt=""/>
                            <em>Andressa Gomes - Campinas</em>
                        </div>

                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>

                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>

                </div>

            </div>

        </section>
    );
}

export default Testemunho;
