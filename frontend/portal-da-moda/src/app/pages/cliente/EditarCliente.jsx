import React, { useState, useEffect } from 'react';
import { Link, Navigate, useParams  } from 'react-router-dom';
import Menu from '../../Components/menu/Menu';
import './EditarCliente.css';

import { db } from '../../Config/FireBase';
import { updateDoc, getDoc, doc } from "firebase/firestore";

function EditarCliente(props) {
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [sucesso, setSucesso] = useState('');
    const { codigo } = useParams();

    const fetchGet = async () => {
        
        const docRef = doc(db, "clientes", codigo);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setNome(docSnap.data().nome);
            setEmail(docSnap.data().email);
            setTelefone(docSnap.data().fone);
          } else {
            setMensagem('Ocorreu algum problema para carregar os dados dos cliente');
          }     
    }
   
    useEffect(() => {
        fetchGet();
    }) 
 
    const uddateTodo = async (e) => {
        e.preventDefault();  
        setMensagem('');

        if (nome.length === 0) {
            setMensagem('Favor informar o Nome do cliente!');
            return;
        } else if (email.length === 0) {
            setMensagem('Favor informar o E-mail do cliente!');
            return;
        } else if (telefone.length === 0) {
            setMensagem('Favor informar o Telefone do cliente!');
            return;
        }
        
        try {
            await updateDoc(doc(db, "clientes", codigo), {
              nome: nome,
              email: email,
              fone: telefone    
            });
            setSucesso('S');
          } catch (e) {
              setSucesso('N');
              setMensagem('Error update document:' + e);
          }
    }
    
    return (
        <div>
            <Menu />
            <div className="container-fluid titulo">

                <div className="offset-lg-3 col-lg-6">
                    <h1>Editar Cliente...</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="codigo" className="form-label">Codigo</label>
                            <input value={codigo} type="text" className="form-control" id="codigo" disabled></input>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="nome" className="form-label">Nome</label>
                            <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" className="form-control" id="nome"></input>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email"></input>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="telefone" className="form-label">Telefone</label>
                            <input value={telefone} onChange={(e) => setTelefone(e.target.value)} type="text" className="form-control" id="telefone"></input>
                        </div>
                        
                        <div className="text-center">
                            <Link to="/app/cliente" className="btn btn-outline-primary btn-acao">Cancelar</Link>
                            <button onClick={uddateTodo} type="submit" className="btn btn-primary btn-acao">Salvar</button>
                        </div>

                        {  mensagem.length > 0 ?
                            <div className="alert alert-danger mt-2" role="alert">
                                {mensagem}
                            </div> : null }

                        {  sucesso === 'S' ?
                            <Navigate to="/app/cliente" /> : null }

                    </form>
                </div>

            </div>            
        </div>
    );
}

export default EditarCliente;
