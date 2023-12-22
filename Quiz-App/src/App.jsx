import React, { useContext } from 'react'
import { useState } from 'react'
import './App.css'
import QuestionBox from '../components/QuestionBox'
import StartPage from '../components/StartPage'
import Result from '../components/Result'
import { AppContext } from './../components/ParentContext.jsx'

function App() {
  const {isDark,setIsDark} = useContext(AppContext)
  const {handleClick}=useContext(AppContext)

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
  return (
   <div>
    {shifting()}
   </div>
  )
}

export default App
