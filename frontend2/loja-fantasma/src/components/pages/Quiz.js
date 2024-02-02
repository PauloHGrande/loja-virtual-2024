import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'

import styles from './Quiz.module.css'

import Quiz_img from '../../img/quiz.svg'

function Quiz() {
    const [quizState, dispatch] = useContext(QuizContext);
    
    return (
        <div className={styles.quiz_cantainer}>
            <div className={styles.welcome} >
                <h2>Seja bem-vindo</h2>
                <p>Clique no botão abaixo para começar:</p>
                <button className={styles.button} onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
                <img className={styles.img} src={Quiz_img} alt="Inicio do Quiz"/>
            </div> 
        </div>          
    )
}

export default Quiz
