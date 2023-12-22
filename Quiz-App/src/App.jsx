// importing required modules

import React, { useContext } from 'react'
import { useState } from 'react'
import './App.css'
import QuestionBox from '../components/QuestionBox'
import StartPage from '../components/StartPage'
import Result from '../components/Result'
import { AppContext } from './../components/ParentContext.jsx'

// defining App function
function App() {
  const {isDark,setIsDark} = useContext(AppContext)
  const {handleClick}=useContext(AppContext)

  // shifting function for changing component
  const shifting= ()=>{
  switch(handleClick){
    case "StartPage":
      return <StartPage/>
    case "QuestionBox":
      return <QuestionBox/>
    case "Result":
      return <Result/>
  }
  }

  // returning the function for switching
  return (
   <div>
    {shifting()}
   </div>
  )
}

export default App
