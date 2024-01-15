import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Login.css';

import { auth } from '../../Config/FireBase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [sucesso, setSucesso] = useState('');

    const LoginUsuario = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, senha);
            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            setSucesso('S');
        } catch (error) {
            setSucesso('N');
        }
    }

    return (
        <div className="d-flex align-items-center text-center form-login-container">

            <form className="form-signin">

                <img className="mb-4" src="/Images/Login.jfif" alt="" />

                <div className="form-floating">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
                    <label htmlFor="floatingInput">E-mail</label>
                </div>

                <div className="form-floating">
                    <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <button onClick={LoginUsuario} className="btn btn-primary w-100 py-2" type="button">Acessar</button>

                {  sucesso === 'N' ?
                    <div className="alert alert-danger mt-2" role="alert">
                        E-mail ou senha invalida.
                    </div> : null }

                {  sucesso === 'S' ?
                    <Navigate to="/app/home" /> : null }

                <div className="login-links mt-5">
                    <Link to="/app/resetsenha" className="mx-3">Esqueci minha Senha</Link>
                    <Link to="/app/novaconta" className="mx-3">Criar uma Conta</Link>
                </div>
                <p className="mt-5 mb-3 text-body-secondary">&copy; Desenvolvido por Fantasma - 2024</p>

            </form>

        </div>
    );
}

export default Login;
