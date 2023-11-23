import React, { useState } from 'react'
import logo from "/img/logo.png"
import logox1 from "/img/logox1.png"
import bg from "/img/img-bg.png"
import apple from "/img/apple.png"
import google from "/img/google.png"
import twt from "/img/x.png"
import "/public/css/login.css"
import { Link } from 'react-router-dom'

export default function Login() {
  const [input, setinput] = useState("")

  const submit = () => {
    
  }

  return (
    <div className='signup'>
       <div className="content">
         <div className="section d-flex">
            <div className="logo-container">
              <a href="/">
              <img src={logox1} alt="" className='logo' />
              </a>
            </div>

            <div className="form">
                <h2 className='mb-2 mt-2 text-center fw-bold'>Welcome back!</h2>
                <p className="mb-5 text-muted text-center">Guiding you to the best produce</p>

                <form action="">

                  <div className="input-group mb-4">
                    <span className="input-group-text"><i className="fa-solid fa-envelope"></i></span>
                    <input type="email" className="p-2" onChange={e => setinput(e.target.value)} placeholder="Email"/>
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text"><i className="fa-solid fa-lock"></i></span>
                    <input type="password" className="p-2" onChange={e => setinput(e.target.value)} placeholder="Password"/>
                  </div>

                  <div className="text-center btns">
                      <button className="btn">Log In</button>
                  </div>

                  <div className="text-center">
                    <p className="text-sm mb-1 mt-3">Log in with</p>
                    <div className="d-flex platform mt-3">
                      <a href=""><img src={apple} alt="" /></a>
                      <a href=""><img src={google} alt="" /></a>
                      <a href=""><img src={twt} alt="" /></a>
                    </div>
                    <p className="text-sm mt-4">
                      Don’t have an account?, sign up <Link to="/signup">here</Link>
                    </p>
                  </div>

                </form>
            </div>
         </div>
      </div>

      <div className="img-bg">
        <img src={bg} alt="" className=''/>
      </div>
     
    </div>
  )
}
