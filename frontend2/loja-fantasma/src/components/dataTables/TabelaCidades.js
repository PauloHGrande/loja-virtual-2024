import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table } from 'antd'
import { isUnBorderedButtonType } from 'antd/es/button';

const TabelaCidade = () => {
    const [gridData, setGridData] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        loadData();
    }, []);
    
    const loadData = async () => {
        setLoading(true);
        const response = await axios.get("http://localhost:8080/api/cidade/");
        setGridData(response.data);
        setLoading(false);
    }

    const modifieldData = gridData.map(({ body, ...item }) => ({
        ...item,
        key: item.id,
        comment: body,
    }));

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
        },
        {
            title: "Name",
            dataIndex: "nome",
            align: "center",
            editable: false,
        },
        {
            title: "Estado",
            dataIndex: "estado.nome",
            align: "center",
            editable: false,
        },    
        {
            title: "Sigla",
            dataIndex: "estado.sigla",
            align: "center",
            editable: false,
        },             
        {
            title: "DataCriação",
            dataIndex: "dataCriacao",
            align: "center",
            editable: false,
        },
        {
            title: "DataAtualização",
            dataIndex: "dataAtualizacao",
            align: "center",
            editable: false,
        },
        {
            title: "Actions",
            dataIndex: "actions",
            align: "center",
        }      
    ];

    console.log("modifieldData", modifieldData)

    return (
        <div>
            <Table 
            columns={columns}
            dataSource={modifieldData}
            bordered
            loading={loading}
            />
        </div>
    )
}

export default TabelaCidade
