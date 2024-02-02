import React, { useState, useEffect }  from 'react';
import AppMenu from '../../../Components/menu/AppMenu';
import './CadEstados.css';
import ListarEstados from './ListarEstados';
import {  Modal } from 'antd';
import { Link } from 'react-router-dom';

import { db } from '../../../Config/FireBase';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

function CadEstados() {

    const [estados, setEstados] = useState([]);
    const [removeuEstado, setRemoveuEstado] = useState('');

    const fetchGet = async () => {
       
        await getDocs(collection(db, "estados"))
            .then((querySnapshot) => {               
                const newData = querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id }));
                setEstados(newData);
            })       
    }

    useEffect(() => {
        fetchGet();
    }, [removeuEstado])

    function removerEstado(id) {

        const docRef = doc(db, "estados", id);

        deleteDoc(docRef)
            .then(() => {
                setRemoveuEstado(id);
            })
            .catch(error => {
                console.log(error);
            })
    } 

    const onRemoverEstado = (record) => {
        Modal.confirm({
            title: 'Are you sure, you want to delete?',
            okText: 'Sim',
            okType: 'danger',
            onOk:() => {
                removerEstado(record.id);
            }
        })
    }

    return (
        <div className="page">

            <AppMenu />

            <div className="container">
                <h1>Cadastro de Estados...</h1>
                <br></br>
                <div className="row">
                    <div className="col-4">
                        <Link to="/app/novoestado" className="btn btn-primary btn-cor" type="button"><i className="fas fa-plus"></i> Estado</Link>
                    </div>
                </div>
                <br></br>
            </div>           
            
            <ListarEstados arrayEstados={estados} onRemoverEstado={onRemoverEstado}/>
            
        </div>
    );
}

export default CadEstados;
