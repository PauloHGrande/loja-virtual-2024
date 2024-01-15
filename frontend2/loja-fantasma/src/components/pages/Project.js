import { v4 as uuidv4 } from 'uuid'
import styles from './Project.module.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ProjectForm from '../project/ProjectForm'
import Message from '../layout/Message'
import ServiceForm from '../service/ServiceForm'
import ServiceCard from '../service/ServiceCard'

function Project() {
  
  const { id } = useParams()

  const [project, setProject] = useState ([])
  const [services, setServices] = useState ([])
  const [showProjectForm, setShowProjectForm] = useState (false)
  const [showServiceForm, setShowServiceForm] = useState (false)
  const [message, setMessage] = useState()
  const [type, setType] = useState()

  useEffect(() => {

    fetch(`http://localhost:5000/projects/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(resp => resp.json())
      .then((data) => {
          setProject(data)
          setServices(data.services)
      })
      .catch(err => console.log(err))

  }, [id])

  function editPost(project) {
    setMessage('')
    
    // depois criar valida��es
    if(project.budget < project.cost) {
        setMessage('O Or�amento n�o pode ser menos que o custo do project!')
        setType('error')
        return false
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(project)
    }).then(resp => resp.json())
      .then((data) => {
        setProject(data)
        setShowProjectForm(false)
        setMessage('Projeto Atualizado!')
        setType('success')
      })
      .catch(err => console.log(err))
  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm)
  }

  function createService(project) {
    setMessage('')
    
    // last service
    const lastService = project.services[project.services.length -1]

    lastService.id = uuidv4()

    const lastServiceCost = lastService.cost
    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

    if(newCost > parseFloat(project.budget)) {
        setMessage('Or�amento ultrapassado, verifique o valor do servi�o')
        setType('error')
        project.services.pop()
        return false
    }

    project.cost = newCost

    fetch(`http://localhost:5000/projects/${project.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(project)
    }).then(resp => resp.json())
      .then((data) => {
        setShowServiceForm(false)
      })
      .catch(err => console.log(err))
  }

  function removeService(id, cost) {
    setMessage('')      
    
    const serviveUpdate = project.services.filter(
          (service) => service.id !== id
      )

    const projectUpdate = project

    projectUpdate.services = serviveUpdate
    projectUpdate.cost = parseFloat(projectUpdate.cost) - parseFloat(cost)

    fetch(`http://localhost:5000/projects/${projectUpdate.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectUpdate)
    }).then(resp => resp.json())
      .then((data) => {
        setProject(projectUpdate)
        setServices(serviveUpdate)
        setMessage('Servi�o removido com Sucesso!')
      })
      .catch(err => console.log(err))
  }

  return (<> 
    {project.name ? (
        <div className={styles.project_details}>
            <Container customClass="column">
                {message && <Message type={type} msg={message} />}
                <div className={styles.details_container}>
                    <h1>Projeto: {project.name}</h1>
                    <button className={styles.btn} onClick={toggleProjectForm}>
                        {!showProjectForm ? 'Editar Projeto' : 'Fechar'}
                    </button>
                    {!showProjectForm ? (
                        <div className={styles.project_inf}>
                            <p>
                                <span>Categoria:</span> {project.category.name}
                            </p>
                            <p>
                                <span>Total de Or�amento:</span> R$ {project.budget}
                            </p>
                            <p>
                                <span>Total Utilizado:</span> R$ {project.cost}
                            </p>                            
                        </div>    
                    ) : (
                        <div className={styles.project_inf}>
                            <ProjectForm handleSubmit={editPost} btnText="Concluir Edi��o" projectData={project}/>
                        </div> 
                    )}
                </div>
                <div className={styles.service_form_container}>
                    <h2>Adicione um servi�o:</h2>
                    <button className={styles.btn} onClick={toggleServiceForm}>
                        {!showServiceForm ? 'Adicionar Servi�o' : 'Fechar'}
                    </button>
                    <div className={styles.project_inf}>
                        { showServiceForm && (
                            <ServiceForm 
                                handleSubmit={createService}
                                btnText="Adicionar Servi�o"
                                projectData={project}
                            />
                        ) }
                    </div>
                </div>
                <h2>Servi�os</h2>
                <Container customClass="start">
                    {services.length > 0 &&
                        services.map((service) => (
                            <ServiceCard 
                                id={service.id}
                                name={service.name}
                                cost={service.cost}
                                description={service.description}
                                key={service.id}
                                handleRemove={removeService}
                            />
                        ))
                    }
                    {services.length === 0 && <p>N�o h� servi�os Cadastrados.</p>}
                </Container>
            </Container>
        </div>
    ): (
        <Loading />
    )}
  </>);
}

export default Project;