import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Auth';
import './Menu.css';

function Menu_old() {

    const { setUsuarioLogado } = useContext(AuthContext);

    function Logout() {
        setUsuarioLogado(false);
        localStorage.removeItem("logado");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }

    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-dark">

            <div className="container-fluid">
                
                <a className="navbar-brand" href="/">Portal da Moda</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="offcanvas offcanvas-end text-bg-dark" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Portal da Moda</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                
                    <div className="offcanvas-body">
                        
                        <ul className="navbar-nav justify-content-begin flex-grow-1 pe-3">
                        
                            <li className="nav-item">
                                <Link to="/app/home" className="nav-link active" aria-current="page">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/app/cliente" className="nav-link active" aria-current="page">Clientes</Link>
                            </li>  

                            <li className="nav-item">
                                <a href="#" onClick={Logout} className="nav-link active logout" aria-current="page">Sair</a>
                            </li>                                                                         

                        </ul>

                    </div>
                    
                </div>

            </div>

        </nav>
    );
}

export default Menu_old;