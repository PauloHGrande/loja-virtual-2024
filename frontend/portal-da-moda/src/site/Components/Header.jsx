import React from 'react';

function Header() {
    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-dark">

            <div className="container">
                
                <a className="navbar-brand" href="/#">Portal da Moda</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="offcanvas offcanvas-end text-bg-dark" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Portal da Moda</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                
                    <div className="offcanvas-body">
                        
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#banner">Home</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#features">Features</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#testemunho">Clientes</a>
                            </li>    

                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#preco">Planos e Precos</a>
                            </li>      

                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#footer">Contato</a>
                            </li>                                                                          

                        </ul>

                    </div>
                    
                </div>

            </div>

        </nav>
    );
}

export default Header;
