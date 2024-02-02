import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ResetSenha.css';

import { auth } from '../../Config/FireBase';
import { sendPasswordResetEmail } from 'firebase/auth';

function ResetSenha() {

    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [sucesso, setSucesso] = useState('');

    const recuperarSenha = async (e) => {
        e.preventDefault();
        setSucesso('');
        setMensagem('');
        if (!email) {
            setMensagem('O campo de E-mail nao pode ser nulo!');
            return;
        }
        try {
            await sendPasswordResetEmail(auth, email);
            setSucesso('Envido um link de recuperacao da senha no e-mail informado!');
        } catch (error) {
            if ( error.code === 'auth/invalid-email') {
                setMensagem('O E-mail informado esta invalido!.');
            } else {    
                setMensagem(error.code);
            }
        }
    }

    return (
        <div className="d-flex align-items-center text-center form-login-container">

            <form className="form-signin">

                <img className="mb-4" src="/Images/recuperar-senha.png" alt="" />

                <div className="form-floating">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
                    <label htmlFor="floatingInput">E-mail</label>
                </div>

                <button onClick={recuperarSenha} className="btn btn-primary w-100 py-2" type="button">Enviar</button>

                {  mensagem.length > 0 ?
                    <div className="alert alert-danger mt-2" role="alert">
                        {mensagem}
                    </div> : null
                }
                {  sucesso.length > 0 ?
                    <div className="alert alert-success mt-2" role="alert">
                        {sucesso}
                    </div> : null
                }

                <div className="login-links mt-5">
                    <Link to="/app/novaconta" className="mx-3">Criar uma Conta</Link>
                    <Link to="/app" className="mx-3">Fazer Login</Link>
                </div>
                <p className="mt-5 mb-3 text-body-secondary">&copy; Desenvolvido por Fantasma - 2024</p>

            </form>

        </div>
    );
}

export default ResetSenha;
