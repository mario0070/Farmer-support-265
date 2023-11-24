import React, { useEffect, useRef, useState } from 'react'
import logox1 from "/img/logox1.png"
import bg from "/img/img-bg.png"
import apple from "/img/apple.png"
import google from "/img/google.png"
import twt from "/img/x.png"
import { Link, Navigate, redirect } from 'react-router-dom'
import Axios from '../utils/axios'
import { CookiesProvider, useCookies } from "react-cookie";

export default function Register() {
  const [input, setinput] = useState("")
  const [cookie, setCookie] = useCookies("")
  const [submitBtn, setsubmitBtn] = useState("Sign Up")

  const email = useRef("")
  const password = useRef("")
  const confirm_password = useRef("")

  const alert = (icon, text) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });

    Toast.fire({
      icon: icon,
      title: text
    });
  }

  const registerUser = (e) => {
    e.preventDefault()
    if(email.current.value != "" && password.current.value != "" && confirm_password.current.value != ""){
      if(confirm_password.current.value == password.current.value){
        var btn = document.getElementById("submit")
        btn.innerHTML = `Process <div class="spinner-border spinner-border-sm"></div>`
        Axios.post("/user/signup",{
          email: email.current.value,
          password: password.current.value,
        })
        .then(res => {
          console.log(res)
          setCookie("user_token",res.data)
          alert("success","Account created succesfully")
          window.location.href = "/profile-setup"
        })
        .catch(err => {
          console.log(err)
          btn.innerHTML = "Sign Up"
          alert("error",err.response.data.Error)
        })
      }else{
        alert("warning","password does not match")
      }
    }else{
      alert("warning","Please fill all the fields")
    }
  
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

            <div className="form mb-5">
                <h2 className='mb-2 mt-2 text-center fw-bold'>Welcome!</h2>
                <p className="mb-5 text-muted text-center">Create an account to get started</p>

                <form action="" onSubmit={registerUser}>

                  <div className="input-group mb-4">
                    <span className="input-group-text"><i className="fa-solid fa-envelope"></i></span>
                    <input ref={email} type="email" className="p-2" onChange={e => setinput(e.target.value)} placeholder="Email"/>
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text"><i className="fa-solid fa-lock"></i></span>
                    <input ref={password} type="password" className="p-2" onChange={e => setinput(e.target.value)} placeholder="Password"/>
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text"><i className="fa-solid fa-lock"></i></span>
                    <input ref={confirm_password} type="password" className="p-2" onChange={e => setinput(e.target.value)} placeholder="Confirm Password"/>
                  </div>

                  <div className="text-center btns">
                      <button id='submit' className="btn">{submitBtn}</button>
                  </div>

                  <div className="text-center">
                    <p className="text-sm mb-1 mt-3">Sign up with</p>
                    <div className="d-flex platform mt-3">
                      <a href=""><img src={apple} alt="" /></a>
                      <a href=""><img src={google} alt="" /></a>
                      <a href=""><img src={twt} alt="" /></a>
                    </div>
                    <p className="text-sm mt-4">
                    Already have an account?, log in <Link to="/login">here</Link>
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
