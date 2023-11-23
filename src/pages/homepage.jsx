import React from 'react'
import logo from "/img/logo.png"
import logox1 from "/img/greenlogo.png"
import bg from "/img/img-bg.png"
import cloud from "/img/Cloud.png"
import analysis from "/img/analysis.png"
import legumes from "/img/legumes.png"
import soil from "/img/soil.png"
import "/public/css/landingpage.css"
import { Link } from 'react-router-dom'
import { CookiesProvider, useCookies } from "react-cookie";

export default function Homepage() {
  const [cookie, setCookie] = useCookies("")
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
          {cookie.user_token && <li className="list-unstyled"><a href="/dashboard">Dashboard</a></li>}
          <li className="list-unstyled"><a href="/about">About</a></li>
          <li className="list-unstyled"><a href="/contact">Contact</a></li>
          <li className="list-unstyled"><a href="/help">Help</a></li>
          {cookie.user_token ? <li className="list-unstyled"><a href="/" className='btn fw-bold'>Logout</a></li> : <li className="list-unstyled"><a href="/login" className='btn fw-bold'>Login</a></li>}
          
        </ul>
     </div>

     <div className="head-up">
        <h2 className="text-white fw-bold">Guiding you to a fruitful harvest</h2>
        <p className="text-white">Bountiful fruits, tasty produce is what we offer, just hit the button below</p>
        { !cookie.user_token && <li className="list-unstyled mt-4"><a href="/signup" className='btn fw-bold'>Get started</a></li>}
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

      <div className="section2 p-0">
        <div className="img-bg">
          <img src={legumes} alt="" />
        </div>
        <div className="text-lay text-white">
          <p className="text-start mt-5">Providing you with the current market listings from other farmers</p>
          <p className="text-start">Recommendation system and image analyzing</p>
          <p className="text-start">We provide our users with ability to implement their own listings in the market</p>
        </div>
      </div>
      
      <div className="section2 p-0">
        <div className="img-bg">
          <img src={cloud} alt="" />
        </div>
        <div className="text-lay">
          <p className="fw-bold mt-1">Favourable weather conditions for plant growth</p>
          <ul className='mt-2'>
            <li className="mb-2">Sunlight Content</li>
            <li className="mb-2">Rain Quantity</li>
            <li className="mb-2">Humid Condition</li>
            <li className='mb-2'>Irrigation</li>
            <li className='mb-2'>Wind</li>
            <li className='mb-2'>Rainmaking</li>
          </ul>
        </div>
      </div>
      
      <div className="section2 p-0">
        <div className="img-bg">
          <img src={analysis} alt="" />
        </div>
        <div className="text-lay">
          <div className="mx-auto">
            <p className="fw-bold">Market Insights</p>
            <ul className="mt-2">
              <li className="mb-2">Pricing</li>
              <li className="mb-2">Availability</li>
              <li className="mb-2">Volume</li>
              <li className="mb-2">weather impacts</li>
              <li className="mb-2">Supply</li>
              <li className="mb-2">Demand</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section2">
        <h1>Footer</h1>
      </div>
      

   </div>
   
  
    </div>
  )
}
