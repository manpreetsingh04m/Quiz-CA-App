// importing required components
import React, { useState, useContext, useEffect } from 'react';
import questions from './Question.jsx';
import './../src/App.css';
import { AppContext } from './../components/ParentContext.jsx';

// exporting function QuestionBox
export default function QuestionBox() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const {isDark,setIsDark} = useContext(AppContext)
  const { score, setScore } = useContext(AppContext);
  const { setHandleClick } = useContext(AppContext);
  const totalQuestions = questions.length;

  const [highlighted, setHighlighted] = useState(false);
  const currentQuestionData = questions[currentQuestionIndex];

  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1); // Increment the score upon correct answer
    }

    if (currentQuestionIndex === totalQuestions - 1) {
      setHandleClick('Result'); // Set handle click to 'Result' when the last question is answered
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Move to the next question
    }
  };

  const handleHighlight = () => {
    setHighlighted(!highlighted);
  };

  useEffect(() => {
    if (currentQuestionIndex === totalQuestions - 1) {
      setHandleClick('Result'); // Set handle click to 'Result' when the last question is the current question
    }
  }, [currentQuestionIndex, setHandleClick, totalQuestions]);

  console.log(score); // Place the console.log outside the return statement to see the score in the console

  // returning content to render
  return (
    <div className='questionBack'>
        <div className={isDark ? 'backmorph' : ''}></div>
      <div className='morph'>
        {/* Dark/Light Button */}
        <div className='darkLight'>
          <button className='darkLightButton'
          onClick={()=>{
            setIsDark(!isDark)
          }}
          style={{
            background: isDark
            ? `linear-gradient(rgba(117, 86, 159, 0.68), rgba(67, 51, 89, 0.68)), url('../public/buttonBac.png')`
            : `linear-gradient(rgba(152, 78, 255, 0.68), rgba(152, 78, 255, 0.68)), url('../public/buttonBac.png')`
          }}
          >{isDark?"Light":"Dark"}</button>
        </div>

        {/* Question Number */}
        <div className='questionNumber'>{currentQuestionIndex + 1}/{totalQuestions}</div>

        {/* Question */}
        <div className= 'question' 
        style={{
          color:highlighted?"red":"white"
        }}
        >{currentQuestionData.text}</div>

        {/* Options */}
        <div className='option'>
          {currentQuestionData.options.map((option) => (
            <button
              key={option.id}
              className='optionNumber'
              onClick={() => handleOptionClick(option.isCorrect)}
            >
              {option.text}
            </button>
          ))}
        </div>

        {/* Highlight Button */}
        <div className='highlight'>
          <button className='highlightButton' onClick={()=>{
            setHighlighted(!highlighted)
          }}
          style={{
            background: isDark
            ? `linear-gradient(rgba(117, 86, 159, 0.68), rgba(67, 51, 89, 0.68)), url('../public/buttonBac.png')`
            : `linear-gradient(rgba(152, 78, 255, 0.68), rgba(152, 78, 255, 0.68)), url('../public/buttonBac.png')`
          }}
          >{!highlighted?"HIGHLIGHT":"REMOVE"}</button>
        </div>
      </div>
      
    </div>
  );
}
