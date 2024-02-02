import React, { useState } from 'react';
import AppMenu from '../../../Components/menu/AppMenu';
import './NovoEstado.css';
import { Button, Form, Input } from 'antd';
import { Navigate } from 'react-router-dom';

import { db } from '../../../Config/FireBase';
import { collection, addDoc } from "firebase/firestore";

function NovoEstado() {

    const [nome, setNome] = useState('');
    const [sigla, setSigla] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [sucesso, setSucesso] = useState('');

    const addTodo = async (e) => {
        e.preventDefault();  
        setMensagem('');

        if (nome.length === 0) {
            setMensagem('Favor informar o Nome do Estado!');
            return;
        } else if (sigla.length === 0) {
            setMensagem('Favor informar a Sigla do Estado!');
            return;
        }
        
        try {
            await addDoc(collection(db, "estados"), {
              nome: nome,
              sigla: sigla   
            });
            setSucesso('S');
          } catch (e) {
              setSucesso('N');
              setMensagem('Error adding document:' + e);
          }
    }

    const voltar = () => {
        setSucesso('S');
    }

    return (
        <div>
            <AppMenu />
            <div className="offset-lg-3 col-lg-6">
                <div>
                    <br></br>
                    <p>Formulario para Cadastrar Novo Estado...</p>
                    <br></br>
                </div>
                <Form autoComplete="off">
                    
                    <div className="row">

                        <Form.Item 
                                name="nome" 
                                label="Nome"
                                onChange={(e) => setNome(e.target.value)}
                                rules={[ 
                                            { required:true, 
                                            message: "Favor informar o Nome do Estado!"
                                            },
                                            {
                                                whitespace: true
                                            },
                                            {
                                                max: 20
                                            }
                                    ]}
                                    hasFeedback>
                            <Input placeholder="Informe o Nome do Estado" />
                        </Form.Item>
                    </ div>
                    
                    <div className="row">
                        <Form.Item 
                                name="sigla" 
                                label="Sigla"
                                onChange={(e) => setSigla(e.target.value)}
                                rules={[ 
                                    { required:true, 
                                    message: "Favor informar o Sigla do Estado!"
                                    },
                                    {
                                        whitespace: true
                                    },
                                    {
                                        min: 2,
                                        max: 2
                                    }
                            ]}
                            hasFeedback>
                            <Input placeholder="Informe o Sigla do Estado" />
                        </Form.Item>
                    </div>

                    <br></br>

                    <div className="row">
                        <div className="col-md-8"></div>
                        <div className="col-md-2">
                            <Form.Item wrapperCol={{ span: 24}}>
                                <Button block type="dashed" onClick={voltar}>
                                    Voltar
                                </Button>
                            </Form.Item>
                        </div>

                        <div className="col-md-2">
                            <Form.Item wrapperCol={{ span: 24}}>
                                <Button block type="primary" onClick={addTodo}>
                                    Salvar
                                </Button>
                            </Form.Item>
                        </div>
                    </div>

                    {  mensagem.length > 0 ?
                            <div className="alert alert-danger mt-2" role="alert">
                                {mensagem}
                            </div> : null }

                    {  sucesso === 'S' ?
                        <Navigate to="/app/cadestados" /> : null }

                </Form>

            </div>

        </div>
    );
}

export default NovoEstado;
