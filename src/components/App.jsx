import { useState } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Dashboard from "../pages/dashboard"
import Homepage from "../pages/homepage"
import Login from "../pages/login"
import Register from "../pages/register"
import Chat from "../pages/chat-bot"
import Articles from "../pages/articles"
import Market from "../pages/market"
import Crop from "../pages/crop-management"
import Weather from "../pages/weather"
import Mylisting from "../pages/personal-produce"
import Settings from "../pages/settings"
import Profile from "../pages/setProfile"

function App() {

  return (
    <>     
        <Routes>
          <Route element={<Homepage/>} path='/'/>
          <Route element={<Register/>} path='/signup'/>
          <Route element={<Login/>} path='/login'/>
          <Route element={<Dashboard/>} path='/dashboard'/>
          <Route element={<Chat/>} path='/chat-bot'/>
          <Route element={<Articles/>} path='/articles'/>
          <Route element={<Market/>} path='/market-insight'/>
          <Route element={<Crop/>} path='/produce-listing'/>
          <Route element={<Weather/>} path='/weather'/>
          <Route element={<Mylisting/>} path='/my-produce'/>
          <Route element={<Settings/>} path='/account-settings'/>
          <Route element={<Profile/>} path='/profile-setup'/>
        </Routes>
    </>
  )
}

export default App
