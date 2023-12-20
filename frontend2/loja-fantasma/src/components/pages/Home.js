import styles from './Home.module.css'

import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <section className={styles.home_cantainer}>
            <h1>Bem-Vindo a <span>Loja Fantasma...</span></h1>
            <p>Comece a gerenciar seus projetos!</p>
            <LinkButton to="/newproject" text="Criar Projetos" />
            <img src={savings} alt="Loja Fantasma"/>
        </section>            
    )
}

export default Home
