import React from 'react'

import { useState,createContext } from 'react'

export const AppContext = createContext()

const ParentContext = ({children})=>{
const [handleClick,setHandleClick]= useState("StartPage")

const [score,setScore]=useState(0)



const [isDark,setIsDark] = useState(false)

const toggleDarkMode = () => {
  setIsDark((prevIsDark) => !prevIsDark);
};


return <AppContext.Provider value={{ setHandleClick, handleClick ,isDark,setIsDark,score,setScore,toggleDarkMode }}>
        {children}
    </AppContext.Provider>

}

export default ParentContext