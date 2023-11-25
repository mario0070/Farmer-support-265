import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../components/sidebar'
import "/public/css/home.css"
import "/public/css/settings.css"
import farmer from "/img/farmer.png"
import logo from "/img/greenlogo.png"
import farmer1 from "/img/farmer1.png"
import book from "/img/book.png"
import { CookiesProvider, useCookies, } from "react-cookie";
import $ from "jquery"
import Cookies from 'js-cookie';


export default function Settings() {
    const [cookie, setCookie, removeCookie] = useCookies("")
    const [farmerName, setFarmer] = useState("")
    const fullname = useRef("")
    const email = useRef("")
    const location = useRef("")
    const password = useRef("")
    const biz_name = useRef("")

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

    if(!cookie.user_token){
      window.location.href = "/login"
    }else{
      useEffect(()=>{
        var user_data = JSON.parse(Cookies.get('user'))
        location.current.value = user_data.location
        biz_name.current.value = user_data.farmName
        email.current.value = user_data.email
        fullname.current.value = user_data.farmerName
        setFarmer(user_data.farmerName)
        // console.log(user_data)
      })
  
      const updateP = () => {
          alert("warning", "In development")
      }
  
      const profilePic = () => {
        console.log("yea")
        alert("warning", "Coming soon!!")
      }
      
      return (
        <div className='dashboard'>
            <div className="d-flex">
            <Sidebar/>
  
            <div className="home w-100">
                <div data-bs-toggle="offcanvas" data-bs-target=".show_sidebar">
                  <i className="fa-solid fa-bars"></i>
                </div>
                <div className="header d-flex">
                    <i className="fa-regular fa-bell text-muted mb-3 mx-2 mt-2"></i>
                    <img src={farmer} alt="" />
                </div>
            </div>
  
            </div>
  
            <div className="content settings mt-2">
                <div className="setting_container">

                    <div className="d-flex">
                        <div className="img sticky-top text-center">
                            <img src={farmer1} alt="" />
                            <div className="upload_img">
                                <label htmlFor="prf">
                                <i className="fa-solid fa-plus"></i>
                                </label>
                                <input onChange={profilePic} type="file" name="file" id="prf" className='d-none' />
                            </div>
                            <p className="name fw-bold  mt-3" >{farmerName}</p>
                            <button onClick={updateP} className="btn btn-success">Save changes</button>
                        </div>

                        <div className="form">
                            <form action=''>
                               <div>
                                    <label htmlFor="">Edit Fullname</label>
                                    <input ref={fullname} type="text" placeholder='Enter your fullname' />
                               </div>
                               <div>
                                    <label htmlFor="">Email Address</label>
                                    <input ref={email} type="email" placeholder='Enter your fullname' />
                               </div>
                               <div>
                                    <label htmlFor="">Change business name</label>
                                    <input ref={biz_name} type="text" placeholder='Enter your business name' />
                               </div>
                               <div>
                                    <label htmlFor="">Location</label>
                                    <input ref={location} type="text" placeholder='Enter your location' />
                               </div>
                               <div>
                                    <label htmlFor="">Change password</label>
                                    <input ref={password} type="password" placeholder='********' />
                               </div>
                               <div>
                                    <label htmlFor="">Confirm Change password</label>
                                    <input type="password" placeholder='********' />
                               </div>
                               
                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </div>
      )
    }
}
