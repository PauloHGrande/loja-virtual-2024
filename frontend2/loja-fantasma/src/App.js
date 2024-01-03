import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Quiz from './components/pages/Quiz'
import Question from './components/pages/Question'
import GameOver from './components/pages/GameOver'
import { QuizContext } from './context/quiz'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Project from './components/pages/Project'



function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    // embaralhar as perguntas do quiz.
    dispatch({ type: "REORDER_QUESTIONS" })
  }, [])

  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>        
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />                      
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />        
            <Route path="/newproject" element={<NewProject />} />
            <Route path="/project/:id" element={<Project />} />  
            {quizState.gameStage === "Start" && <Route path="/quiz" element={<Quiz />} />}
            {quizState.gameStage === "Playing" && <Route path="/quiz" element={<Question />} />}    
            {quizState.gameStage === "End" && <Route path="/quiz" element={<GameOver />} />}             
        </Routes>
      </Container> 
      <Footer />
    </Router>
  );
}

export default App;
