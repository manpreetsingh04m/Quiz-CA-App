// importing required components
import React from 'react'

import { useState,createContext } from 'react'

export const AppContext = createContext()

const ParentContext = ({children})=>{
const [handleClick,setHandleClick]= useState("StartPage")
const [score,setScore]=useState(0)
const [isDark,setIsDark] = useState(false)

// toggling dark and light mode
const toggleDarkMode = () => {
  setIsDark((prevIsDark) => !prevIsDark);
};

// returning required values so other files can access
return <AppContext.Provider value={{ setHandleClick, handleClick ,isDark,setIsDark,score,setScore,toggleDarkMode }}>
        {children}
    </AppContext.Provider>

}

export default ParentContext