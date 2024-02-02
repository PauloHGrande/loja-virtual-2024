import { Table, Input, Button } from 'antd';
import { EditOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ListarEstados(props) {

    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);

    const columns = [
        {
            key: 1,
            title:'Codigo',
            dataIndex:'id',
            sorter:(record1,record2) => {
                return record1.nome !== record2.name
            },
            rowScope: 'row'
        },
        {
            key: 2,
            title:'Nome',
            dataIndex:'nome',
            filterDropdown:({setSelectedKeys, selectedKeys, confirm, clearFilters}) => {
                return (
                    <> 
                        <Input
                            autoFocus 
                            placeholder="Buscar pelo Nome:"
                            value={selectedKeys[0]}
                            onChange={(e) =>{
                                setSelectedKeys(e.target.value?[e.target.value]:[])
                            }}
                            onPressEnter={() => {
                                confirm();
                            }}
                            onBlur={() => {
                            confirm();
                            }}
                        />
                        <Button onClick={() => {confirm()}} type="primary">Buscar</Button>
                        <Button onClick={() => {clearFilters('')}} type="dashed">Reset</Button>
                        </> 
                )
            },
            filterIcon:() => {
                return <SearchOutlined />;
            },
            onFilter:(value, record) => {
                return record.nome.toLowerCase().includes(value.toLowerCase())
            },
            rowScope: 'row'
        },
        {
            key: 3,
            title:'Sigla',
            dataIndex:'sigla',
            rowScope: 'row'
        },
        {
            key: 4,
            title:'',
            render:(record) => {
                return(
                    <> 
                        <Link to={`/app/editarestado/${record.id}`}><i className="fas fa-edit icone-acao"></i></Link>
                        <DeleteOutlined onClick={() => { props.onRemoverEstado(record) }} style={{ color: "red", marginLeft: 15}}/>
                    </>
                ) 
            },
            align: "center"
        }
    ]
    
    return (
      <div className="container">

          <Table
            bordered="true"
            style={{ backgroundColor:"lightpink" }}
            rowKey='id'
            columns={columns}
            dataSource={props.arrayEstados}
            pagination={
                {
                    current:page,
                    pageSize:pageSize,
                    onChange:(page,pageSize) => {
                        setPage(page)
                        setPageSize(pageSize)
                    }
                }
            }
          >
          </Table>

      </div>
  );

}

export default ListarEstados;
