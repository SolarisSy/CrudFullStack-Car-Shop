import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Catalogo from './catalogo/main'
import App from './App'

const screen = () => {
 return (
  <Router>
   <Routes>
    <Route exact path='/' element={<App />} />
    <Route path='/catalogo' element={<Catalogo />} />
   </Routes>
  </Router>
 )
}

export default screen
