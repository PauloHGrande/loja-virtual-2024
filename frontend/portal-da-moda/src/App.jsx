import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Paginas */
import Site from './site/Site';
import Login from './app/pages/login/Login';
import NovaConta from './app/pages/novaConta/NovaConta';
import ResetSenha from './app/pages/resetSenha/ResetSenha';
import Home from './app/pages/home/Home';
import NovoCliente from './app/pages/cliente/NovoCliente';
import EditarCliente from './app/pages/cliente/EditarCliente';
import Cliente from './app/pages/cliente/Cliente';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' Component={Site}/>
                <Route exact path='/app' Component={Login}/>
                <Route exact path='/app/novaconta' Component={NovaConta}/>
                <Route exact path='/app/resetsenha' Component={ResetSenha}/>
                <Route exact path='/app/home' Component={Home}/>
                <Route exact path='/app/cliente' Component={Cliente}/>
                <Route exact path='/app/novocliente' Component={NovoCliente}/>
                <Route exact path='/app/editarcliente/:codigo' Component={EditarCliente}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
