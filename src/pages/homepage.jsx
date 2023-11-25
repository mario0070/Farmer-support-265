import React from 'react'
import logo from "/img/logo.png"
import logox1 from "/img/greenlogo.png"
import bg from "/img/img-bg.png"
import cloud from "/img/Cloud.png"
import analysis from "/img/analysis.png"
import legumes from "/img/legumes.png"
import soil from "/img/soil.png"
import berry from "/img/berry.png"
import flowerbag from "/img/flowerbag.png"
import "/public/css/landingpage.css"
import "/public/css/sidebar.css"
import { Link } from 'react-router-dom'
import { CookiesProvider, useCookies } from "react-cookie";

export default function Homepage() {
  const [cookie, setCookie] = useCookies("")
  const [cookies, setsCookie, removeCookie] = useCookies(["user_token"])

  const logout = () => {
    Swal.fire({
        title: "Are you sure?",
        text: "You are logging out your account",
        icon: "warning",
        color : "grey",
        showCancelButton: true,
        confirmButtonColor: "green",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Log out!"
      }).then((result) => {
        if (result.isConfirmed) {
          removeCookie(["user_token"])
            Swal.fire({
                title: "Logged out!",
                text: "You are logged out.",
                icon: "success"
            });
        }
    });
  }

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

        <div className="open_canvas"  data-bs-toggle="offcanvas" data-bs-target=".show-sidebar">
          <i className="fa-solid fa-bars"></i>
          Menu
        </div>
        
          <div className="offcanvas offcanvas-start show-sidebar">
              <div className="img text-center mt-3">
                <a href="/">
                  <h5 className=''>
                      <img src={logox1} alt="" />
                      Sproutt
                  </h5>
                </a>
              </div>
              <nav className="navbar mt-3 navbar-expand-sm navbar-light">
                  <div className="w-100">
                      <ul className="navbar-nav">
                          <li className="nav-item">
                              <Link className="nav-link" to="/dashboard"><i className="fa-solid fa-bars"></i> Dashboard</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/weather"><i className="fa-solid fa-cloud"></i> Weather Forecast</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/produce-listing"><i className="fa-solid fa-list"></i> Produce Listing</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/chat-bot"><i className="fa-brands fa-bots"></i> Chat Bot</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/market-insight"><i className="fa-solid fa-chart-simple"></i> Market Insight</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/articles"><i className="fa-solid fa-newspaper"></i> Articles</Link>
                          </li>
                      </ul>
                  </div>
              </nav>

              <nav className="navbar bottom-link mt-4 navbar-expand-sm navbar-light">
                  <div className="w-100">
                      <ul className="navbar-nav">
                          <li  className="nav-item">
                              <Link to="/account-settings" className="nav-link"><i className="fa-solid fa-gear"></i> Settings</Link>
                          </li>
                          <li className="nav-item">
                              <Link  onClick={logout} className="nav-link" ><i className="fa-solid fa-power-off"></i> Log Out</Link>
                          </li>
                      </ul>
                  </div>
              </nav>
          </div>

        <ul className='d-flex'>
          <li className="list-unstyled"><a href="/">Home</a></li>
          {cookie.user_token && <li className="list-unstyled"><a href="/dashboard">Dashboard</a></li>}
          <li className="list-unstyled"><a href="/about">About</a></li>
          <li className="list-unstyled"><a href="/contact">Contact</a></li>
          <li className="list-unstyled"><a href="/help">Help</a></li>
          {cookie.user_token ? <li className="list-unstyled"><a onClick={logout}  className='btn fw-bold'>Logout</a></li> : <li className="list-unstyled"><a href="/login" className='btn fw-bold'>Login</a></li>}
          
        </ul>
     </div>

     <div className="section1">
        <div className="img-container">
          <img src={soil} alt="" className='' />
          <h5 className="fw-bold text-center mt-3">An AI chat system that takes care of the rigors of the farming system, providing you with the best solutions.</h5>
        </div>
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

   <div className="body mt-4">
      <div>
        <div className="d-flex flex-wrap p-4">
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
        </div>
      </div>

      <div className="berry p-4 text-center">
        <h4 className='fw-bold'>What we promise?</h4>
        <img src={berry} alt="" />
        <h4 className="fw-bold">The best harvests for your crops, and for every kind</h4>
      </div>
      
      <div className="footer mt-4">
        <div className="footer_content">
          <div className="text-center input">
              <div className="logo">
                <a href="/" className=''>
                  <img src={logo} alt="" className='' />
                  <h2 className='fw-bold text-center text-white'>Sproutt</h2>
                </a>
              </div>
              <h4 className="fw-bold text-white mb-3 mt-5">Contact Us</h4>
              <input type="text" placeholder='Email'/><br />
              <button className="btn btn-light fw-bold">Subscribe</button>
          </div>
          <div className="policy d-flex">
              <div className="">
                <p className="fw-bold">Available on</p>
                <p className="">Whatsapp</p>
                <p className="">Youtube</p>
              </div>
              <div className="">
                <p className="fw-bold">Help</p>
                <p className="">Support</p>
                <p className="">Partners</p>
                <p className="">FAQs</p>
              </div>
              <div className="">
                <p className="fw-bold">Policy</p>
                <p className="">Terms of service</p>
                <p className="">About Us</p>
              </div>
          </div>
        </div>
        <img src={flowerbag} alt="" className='bag'/>
      </div>
      

   </div>
   
  
    </div>
  )
}
