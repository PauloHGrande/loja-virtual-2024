import React, { useState, useEffect } from 'react';
import AppMenu from '../../../Components/menu/AppMenu';
import './AlterarEstado.css';
import { Button, Form, Input } from 'antd';
import { Navigate, useParams } from 'react-router-dom';

import { db } from '../../../Config/FireBase';
import { updateDoc, getDoc, doc } from "firebase/firestore";

function AlterarEstado(props) {

    const [nome, setNome] = useState('');
    const [sigla, setSigla] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [sucesso, setSucesso] = useState('');
    const { codigo } = useParams();
    const [form] = Form.useForm();

    const fetchGet = async () => {
        
        const docRef = doc(db, "estados", codigo);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setNome(docSnap.data().nome);
            setSigla(docSnap.data().sigla);
            form.setFieldValue({
                [nome]:docSnap.data().nome,
                [sigla]:docSnap.data().sigla
            })
          } else {
            setMensagem('Ocorreu algum problema para carregar os dados do estado');
          }     
    }

    useEffect(() => {
        fetchGet();
    })

    const uddateTodo = async (e) => {
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
            await updateDoc(doc(db, "estados", codigo), {
              nome: nome,
              sigla: sigla
            });
            setSucesso('S');
          } catch (e) {
              setSucesso('N');
              setMensagem('Error update document:' + e);
          }
    }

    const voltar = () => {
        setSucesso('S');
    }

    return (
        <div className="page">
            <AppMenu />
            <div className="offset-lg-3 col-lg-6">
                <div>
                    <br></br>
                    <p>Formulario para Cadastrar Novo Estado...</p>
                    <br></br>
                </div>
                <Form autoComplete="off" 
                      form={form}>
                    
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
                            <Input placeholder="Informe o Nome do Estado"/>
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
                                <Button block type="primary" onClick={uddateTodo}>
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

export default AlterarEstado;
