import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../Components/menu/Menu';
import ListarClientes from '../cliente/ListarClientes';
import './Cliente.css';

import { db } from '../../Config/FireBase';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

import SweetAlert from 'react-bootstrap-sweetalert';

function Cliente() {

    const [clientes, setClientes] = useState([]);
    const [removeu, setRemoveu] = useState('');
    const [confirmacao, setConfirmacao] = useState(false);
    const [confirmacaoId, setConfirmacaoId] = useState('');
 
    const fetchGet = async () => {
       
        await getDocs(collection(db, "clientes"))
            .then((querySnapshot) => {               
                const newData = querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id }));
                setClientes(newData);
            })       
    }
   
    useEffect(() => {
        fetchGet();
    }, [removeu])

    function removerCliente(id) {

        const docRef = doc(db, "clientes", id);

        deleteDoc(docRef)
            .then(() => {
                setRemoveu(id);
                setConfirmacao(false);
            })
            .catch(error => {
                console.log(error);
            })
    } 

    function confirmRemoverCliente(id) {
        setConfirmacaoId(id);
        setConfirmacao(true);
    }
    
    return (
        <div>
            <Menu />
            <div className="container-fluid titulo">
                <h1>Cadastro de Clientes...</h1>
                <div className="row">
                    <div className="col-4">
                        <Link to="/app/novocliente" className="btn btn-primary" type="button"><i className="fas fa-plus"></i> Cliente</Link>
                    </div>
                    <div className="col-8">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Pesquisar por Nome" aria-describedby="button-addon2"></input>
                            <button className="btn btn-primary" type="button" id="button-addon2"><i className="fas fa-search"></i> Pesquisar</button>
                        </div>
                    </div>
                </div>
                <ListarClientes arrayClientes={clientes} remover={confirmRemoverCliente}/>

                {   confirmacao ? <SweetAlert
                                    warning
                                    showCancel
                                    showCloseButton
                                    confirmBtnText="Sim"
                                    confirmBtnBsStyle="danger"
                                    cancelBtnText="Nao"
                                    cancelBtnBsStyle="light"
                                    title="Exclusao"
                                    onConfirm={() => removerCliente(confirmacaoId)}
                                    onCancel={() => setConfirmacao(false)}
                                    reverseButtons={true}
                                  >
                        Deseja excluir o cliente selecionado?
                    </SweetAlert> : null }
            </div>
        </div>
    );
}

export default Cliente;
