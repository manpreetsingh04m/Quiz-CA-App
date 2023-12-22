// importing required modules
import React, { useContext } from 'react';
import { AppContext } from './../components/ParentContext.jsx';

// exporting Result function
export default function Result() {
  const totalQuestions = 15; // Assuming there are 10 questions
  const { score, setScore } = useContext(AppContext);
  const { setHandleClick } = useContext(AppContext);
  const { isDark,setIsDark } = useContext(AppContext);

  const calculatePercentage = (score, total) => {
    return ((score / total) * 100).toFixed(2);
  };

  const percentage = calculatePercentage(score, totalQuestions);

  // returning content
  return (
    <div className='resultBack'>
       <div className={isDark ? 'backmorph' : ''}></div>
      <div className='morph'>
        <div className='darkLight'>
          <button className='darkLightButton'
          onClick={()=>{
            setIsDark(!isDark)
          }}
          // giving style for dark and light modes
            style={{
              background: isDark
              ? `linear-gradient(rgba(117, 86, 159, 0.68), rgba(67, 51, 89, 0.68)), url('../public/buttonBac.png')`
              : `linear-gradient(rgba(152, 78, 255, 0.68), rgba(152, 78, 255, 0.68)), url('../public/buttonBac.png')`
            }}
          >{isDark?"Light":"Dark"}</button>
        </div>
        {/* displaying result */}
        <div className='result'>
          Result
        </div>
        <div className='resultScore' 
        >
          You Scored {score} out of {totalQuestions}
        </div>
        <div className='total'>
          Total Percent Correct: {percentage}%
        </div>
        <div className='highlightres'>
          <button className='highlightButton' onClick={()=>{
          setHandleClick("StartPage")
          setScore(0)
          }}
          // changing style according to light and dark
          style={{
            background: isDark
            ? `linear-gradient(rgba(117, 86, 159, 0.68), rgba(67, 51, 89, 0.68)), url('../public/buttonBac.png')`
            : `linear-gradient(rgba(152, 78, 255, 0.68), rgba(152, 78, 255, 0.68)), url('../public/buttonBac.png')`
          }}
          >Restart</button>
        </div>
      </div>
    </div>
  );
}
