// importing required modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ParentContext from './../components/ParentContext.jsx'

// rendering App.jsx so everything is displayed
ReactDOM.createRoot(document.getElementById('root')).render(
    <ParentContext>
        <App />
    </ParentContext>
)
