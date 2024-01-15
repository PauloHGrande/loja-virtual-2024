import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './NovaConta.css';

import { auth } from '../../Config/FireBase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function NovaConta() {
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [sucesso, setSucesso] = useState('');

    const cadastrarUsuario = async (e) => {
        e.preventDefault();
        setMensagem('');
        if (!email || !senha) {
            setMensagem('Os campos de E-mail/Senha nao pode ser nulos!');
            return;
        }
        if (senha.length < 6) {
            setMensagem('Informar uma Senha no minimo com 6 caracteres!');
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, senha);
            setSucesso('S');
        } catch (error) {
            setSucesso('N');
            if ( error.code === 'auth/email-already-in-use') {
                setMensagem('O E-mail ja esta cadastrado!');
            } else if ( error.code === 'auth/invalid-email') {
               setMensagem('O E-mail informado esta invalido!.');
            } else {
                setMensagem(error.code);
            }
        }
    }

    return (
        <div className="d-flex align-items-center text-center form-login-container">

            <form className="form-signin">

                <img className="mb-4" src="/Images/criar-conta.jfif" alt="" />

                <div className="form-floating">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
                    <label htmlFor="floatingInput">E-mail</label>
                </div>

                <div className="form-floating">
                    <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <button onClick={cadastrarUsuario} className="btn btn-primary w-100 py-2" type="button">Criar Conta</button>
                
                {  mensagem.length > 0 ?
                    <div className="alert alert-danger mt-2" role="alert">
                        {mensagem}
                    </div> : null }

                {  sucesso === 'S' ?
                    <Navigate to="/app" /> : null }    

                <div className="login-links mt-5">
                    <Link to="/app" className="mx-3">Ja tenho uma Conta.</Link>
                </div>
                <p className="mt-5 mb-3 text-body-secondary">&copy; Desenvolvido por Fantasma - 2024</p>

            </form>

        </div>
    );
}

export default NovaConta;
