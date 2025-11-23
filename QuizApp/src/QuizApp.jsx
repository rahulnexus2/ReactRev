import React ,{useState,useEffect} from "react";
import quizData from "./data/quizData";


const QuizApp = () => { 
  const [questions,setQuestions] = useState([]);
  const [currentIndex,setCurrentIndex] = useState(0);
  const [selectedOption,setSelectedOption] = useState(null);
  const [score,setScore] = useState(0);
  const [timeLeft,setTimeLeft] = useState(20);
  const [showResult,setShowResult] = useState(false);



  useEffect(()=>{
      setQuestions(quizData);
      console.log(quizData)
  },[])
   
  return (
    <div>
      Quiz App
    </div>
  )
}

export default QuizApp
