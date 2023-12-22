// importing required components 
import React, { useContext } from 'react'
import './../src/App.css'
import ParentContext,{AppContext} from './../components/ParentContext.jsx'

// exporting StartPage function
export default function StartPage() {
  const {isDark,setIsDark} = useContext(AppContext)
  const {setHandleClick}=useContext(AppContext);

  // returning content to display
  return (
    <div className='startBack' >
      <div className={isDark ? 'backmorph' : ''}>
      <div className='morph'>
      <div className='darkLight'>
          <button className='darkLightButton' onClick={()=>{
            setIsDark(!isDark)
          }} 
          // changing color according to the theme
          style={{
            background: isDark
            ? `linear-gradient(rgba(117, 86, 159, 0.68), rgba(67, 51, 89, 0.68)), url('../public/buttonBac.png')`
            : `linear-gradient(rgba(152, 78, 255, 0.68), rgba(152, 78, 255, 0.68)), url('../public/buttonBac.png')`
          }}>{isDark?"Light":"Dark"}</button>
        </div>
        <h1 className='brainburst'>Brain Burst</h1>
        <div className='startButtonBox'>
        <button className='startButton' onClick={()=>{
      setHandleClick("QuestionBox")
    }}

    // changing color according to the theme
    style={{
      background: isDark
      ? `linear-gradient(rgba(117, 86, 159, 0.68), rgba(67, 51, 89, 0.68)), url('../public/buttonBac.png')`
      : `linear-gradient(rgba(152, 78, 255, 0.68), rgba(152, 78, 255, 0.68)), url('../public/buttonBac.png')`
    }}
    >Start Quiz</button>
        </div>
      </div>
      </div>
    </div>
  )
}
