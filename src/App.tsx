import React from 'react'
import './App.css'

import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AuthenticatedRoute from './routes/AuthenticatedRoute'
import Login from './pages/login'
import Home from './pages/home'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthenticatedRoute />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
