import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'

import WellDone from '../../img/welldone.svg'

import styles from './GameOver.module.css'

function GameOver() {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div className={styles.quiz_cantainer}> 
        <div className={styles.gameover}>
            <h2>Fim de Jogo!</h2>
            <p>Pontuação: {quizState.score}</p>
            <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
            <img src={WellDone} alt="Fim do Quiz"/>
            <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniar</button>
        </div>
    </div>
  );
}

export default GameOver;
