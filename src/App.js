import React from 'react'
import "./app.css"
import Navbar from './navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home/Home'


const App = () => {
    return ( <
        Router >
        <
        div className = 'app' >
        <
        Navbar / >
        <
        Routes >
        <
        Route exact path = '/'
        element = { < Home / > }
        />

        <
        /Routes> <
        /div> <
        /Router>
    )
}

export default App