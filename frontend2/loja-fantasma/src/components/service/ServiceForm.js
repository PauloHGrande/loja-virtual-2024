import { useState } from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from '../project/ProjectForm.module.css'

function ServiceForm({ handleSubmit, btnText, projectData }) {
    
    const [service, setService] = useState({})
    
    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }  

    function handleChange(e) {
        setService({ ...service, [e.target.name]: e.target.value})
    }
  
    return (
    <form onSubmit={submit} className={styles.form}>
        <Input 
            type="text"
            text="Nome do Servi�o"
            name="name"
            placeholder="Insira o Nome do Servi�o"
            handleOnChange={handleChange}
        />
        <Input 
            type="number"
            text="Custo do Servi�o"
            name="cost"
            placeholder="Insira o Valor Total"
            handleOnChange={handleChange}
        /> 
        <Input 
            type="text"
            text="Descri��o do Servi�o"
            name="description"
            placeholder="Descreva o Servi�o"
            handleOnChange={handleChange}
        />        
        <SubmitButton text={btnText}/>    
    </form>
  );
}

export default ServiceForm;
