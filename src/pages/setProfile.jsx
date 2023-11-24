import React, { useRef, useState } from 'react'
import logo from "/img/logo.png"
import logox1 from "/img/logox1.png"
import bg from "/img/img-bg.png"
import apple from "/img/apple.png"
import google from "/img/google.png"
import twt from "/img/x.png"
import "/public/css/login.css"
import { Link, redirect } from 'react-router-dom'
import Axios from '../utils/axios'
import { CookiesProvider, useCookies } from "react-cookie";

export default function Login() {
  const [input, setinput] = useState("")
  const [cookie, setCookie] = useCookies("")
  const fullname = useRef("")
  const biz_name = useRef("")
  const location = useRef("")

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

  const setprofile = (e) => {
    e.preventDefault()
    if(fullname.current.value != "" && biz_name.current.value != "", location.current.value != ""){
      var btn = document.getElementById("login")
      btn.innerHTML = `Process <div class="spinner-border spinner-border-sm"></div>`
      Axios.post("/user/profile",{
        fullName: fullname.current.value,
        location: location.current.value,
        farmName: biz_name.current.value,
      })
      .then(res => {
        console.log(res)
        alert("success","Sign in was succesful")
        // redirect("/dashboard")
      })
      .catch(err => {
        console.log(err)
        btn.innerHTML = "Continue"
        alert("error","Please try again")
      })
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

              <div className="form mt-5">
                  <h2 className='mb-5 mt-2 text-center fw-bold'>Set up your profile</h2>

                  <form action="" onSubmit={setprofile}>

                    <div className="input-group mb-4">
                      <span className="input-group-text"><i className="fa-solid fa-envelope"></i></span>
                      <input ref={fullname} type="text" className="p-2" onChange={e => setinput(e.target.value)} placeholder="Fullname"/>
                    </div>

                    <div className="input-group mb-3">
                      <span className="input-group-text"><i className="fa-solid fa-lock"></i></span>
                      <input ref={biz_name} type="text" className="p-2" onChange={e => setinput(e.target.value)} placeholder="Business name"/>
                    </div>

                    <div className="input-group mb-3">
                      <span className="input-group-text"><i className="fa-solid fa-lock"></i></span>
                      <input ref={location} type="text" className="p-2" onChange={e => setinput(e.target.value)} placeholder="Business name"/>
                    </div>

                    <div className="text-center mb-4">
                        <button id='login' className="btn">Continue</button>
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
