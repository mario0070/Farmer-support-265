import React from 'react'
import logo from "/img/logo.png"
import logox1 from "/img/logox1.png"
import bg from "/img/img-bg.png"
import apple from "/img/apple.png"
import google from "/img/google.png"
import twt from "/img/x.png"

export default function Register() {
  return (
    <div className='signup'>
       <div className="content">
         <div className="section d-flex">
            <div className="logo-container">
              <img src={logox1} alt="" className='logo' />
            </div>

            <div className="form mb-5">
                <h2 className='mb-2 mt-2 text-center fw-bold'>Welcome!</h2>
                <p className="mb-5 text-muted text-center">create an account to get started</p>

                <form action="">
                  <div className="input-group mb-4">
                    <span className="input-group-text"><i className="fa-solid fa-envelope"></i></span>
                    <input type="text" className="form-control p-2" placeholder="Fullname"/>
                  </div>

                  <div className="input-group mb-4">
                    <span className="input-group-text"><i className="fa-solid fa-envelope"></i></span>
                    <input type="email" className="form-control p-2" placeholder="Email"/>
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text"><i className="fa-solid fa-lock"></i></span>
                    <input type="password" className="form-control p-2" placeholder="Password"/>
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text"><i className="fa-solid fa-lock"></i></span>
                    <input type="password" className="form-control p-2" placeholder="Confirm Password"/>
                  </div>

                  <div className="text-center btns">
                      <button className="btn">Sign Up</button>
                  </div>

                  <div className="text-center">
                    <p className="text-sm mb-1 mt-3">Sign up with</p>
                    <div className="d-flex platform mt-3">
                      <a href=""><img src={apple} alt="" /></a>
                      <a href=""><img src={google} alt="" /></a>
                      <a href=""><img src={twt} alt="" /></a>
                    </div>
                    <p className="text-sm mt-4">
                    Already have an account?, log in <a href='/login' className='instead'>here</a>
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
