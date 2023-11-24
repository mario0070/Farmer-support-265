import React, { useRef, useState } from 'react'
import logox1 from "/img/logox1.png"
import bg from "/img/img-bg.png"
import "/public/css/login.css"
import { Link, redirect } from 'react-router-dom'
// import axios from '../utils/axios-token'
import { CookiesProvider, useCookies } from "react-cookie";
import Cookies from 'js-cookie';
import axios from 'axios';

export default function Login() {
  const [input, setinput] = useState("")
  const [cookie, setCookie] = useCookies("")
  const fullname = useRef("")
  const biz_name = useRef("")
  const location = useRef("")

  var data = JSON.parse(Cookies.get('user_token'))
  let send = axios.create({
    baseURL: 'https://farmer-support-api.onrender.com/',
    headers: {
        "Authorization" : `Bearer ${data.token}`,
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  });
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
      send.post("/user/profile",{
        fullName: fullname.current.value,
        location: location.current.value,
        farmName: biz_name.current.value,
      })
      .then(res => {
        console.log(res,data.token)
        setCookie("user",res.data.user)
        alert("success","Sign in was succesful")
        // window.location.href = "/dashboard"
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
                      <span className="input-group-text"><i class="fa-solid fa-user"></i></span>
                      <input ref={fullname} type="text" className="p-2" onChange={e => setinput(e.target.value)} placeholder="Fullname"/>
                    </div>

                    <div className="input-group mb-3">
                      <span className="input-group-text"><i class="fa-brands fa-pagelines"></i></span>
                      <input ref={biz_name} type="text" className="p-2" onChange={e => setinput(e.target.value)} placeholder="Business name"/>
                    </div>

                    <div className="input-group mb-3">
                      <span className="input-group-text"><i class="fa-solid fa-location-dot"></i></span>
                      <input ref={location} type="text" className="p-2" onChange={e => setinput(e.target.value)} placeholder="Location"/>
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
