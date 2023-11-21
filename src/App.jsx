import { useState } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Dashboard from "./pages/dashboard"
import Homepage from "./pages/homepage"
import Login from "./pages/login"
import Register from "./pages/register"

function App() {

  return (
    <>     
        <Routes>
          <Route element={<Homepage/>} path='/'/>
          <Route element={<Register/>} path='/signup'/>
          <Route element={<Login/>} path='/login'/>
          <Route element={<Dashboard/>} path='/dashboard'/>
        </Routes>
    </>
  )
}

export default App
