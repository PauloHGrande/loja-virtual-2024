import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PrivateRoutes from './app/Components/privateRoutes/PrivateRoutes';

/* Paginas */
import Site from './site/Site';
import Login from './app/pages/login/Login';
import NovaConta from './app/pages/novaConta/NovaConta';
import ResetSenha from './app/pages/resetSenha/ResetSenha';
import Home from './app/pages/home/Home';
import NovoCliente from './app/pages/cliente/NovoCliente';
import EditarCliente from './app/pages/cliente/EditarCliente';
import Cliente from './app/pages/cliente/Cliente';
import Products from './app/pages/produts/Products';
import CadEstados from './app/pages/cadastros/estados/CadEstados';
import NovoEstado from './app/pages/cadastros/estados/NovoEstado';
import AlterarEstado from './app/pages/cadastros/estados/AlterarEstado';


function App() {    

    return (
        <BrowserRouter> 
                  
            <Routes>
                
                <Route element={<PrivateRoutes/>}>
                    <Route path='/app/home' element={<Home />} />
                    <Route path='/app/cliente' element={<Cliente />} />
                    <Route path='/app/novocliente' element={<NovoCliente />} />
                    <Route path='/app/editarcliente/:codigo' element={<EditarCliente />} />
                    
                    <Route path='/app/cadestados' element={<CadEstados />} />
                    <Route path='/app/novoestado' element={<NovoEstado />} />
                    <Route path='/app/editarestado/:codigo' element={<AlterarEstado />} />
                    <Route path='/app/products' element={<Products />} />
                </Route>

                <Route exact path='/' element={<Site />} />
                <Route path='/app' element={<Login />} />
                <Route path='/app/novaconta' element={<NovaConta />} />
                <Route path='/app/resetsenha' element={<ResetSenha />} />                

            </Routes>         
            
        </BrowserRouter>
    );
}

export default App;
