import React from 'react'
import logo from "/img/logo.png"
import logox1 from "/img/logox1.png"
import bg from "/img/img-bg.png"
import apple from "/img/apple.png"
import google from "/img/google.png"
import twt from "/img/x.png"
import soil from "/img/soil.png"
import "/public/css/landingpage.css"
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <div className='homepage'>
    <div className="content">
     <div className="header d-flex mt-2">
        <div className="logo">
        <a href="/">
          <img src={logo} alt="" className='' />
          <h2 className='fw-bold text-center text-white'>Sproutt</h2>
        </a>
        </div>

        <ul className='d-flex'>
          <li className="list-unstyled"><a href="/">Home</a></li>
          <li className="list-unstyled"><a href="/dashboard">Dashboard</a></li>
          <li className="list-unstyled"><a href="/about">About</a></li>
          <li className="list-unstyled"><a href="/contact">Contact</a></li>
          <li className="list-unstyled"><a href="/help">Help</a></li>
          <li className="list-unstyled"><a href="/login" className='btn fw-bold'>Login</a></li>
        </ul>
     </div>

     <div className="head-up">
        <h2 className="text-white fw-bold">Guiding you to a fruitful harvest</h2>
        <p className="text-white">Bountiful fruits, tasty produce is what we offer, just hit the button below</p>
        <li className="list-unstyled mt-4"><a href="/signup" className='btn fw-bold'>Get started</a></li>
     </div>
   </div>

   <div className="img-bg">
     <img src={bg} alt="" className=''/>
   </div>

   <div className="body">
      <div className="section1">
        <div className="img-container">
          <img src={soil} alt="" className='' />
          <h4 className="fw-bold mt-3">An AI chat system that takes care of the rigors of the farming system, providing you with the best solutions</h4>
        </div>
      </div>

      <div className="section2">
        <h2 className='fw-bold'>Our Services</h2>
      </div>
   </div>
   
  
 </div>
  )
}
