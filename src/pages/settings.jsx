import React, { useEffect, useRef } from 'react'
import Sidebar from '../components/sidebar'
import "/public/css/home.css"
import "/public/css/settings.css"
import farmer from "/img/farmer.png"
import logo from "/img/greenlogo.png"
import farmer1 from "/img/farmer1.png"
import book from "/img/book.png"
import { CookiesProvider, useCookies, } from "react-cookie";

export default function Settings() {
    const [cookie, setCookie, removeCookie] = useCookies("")

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

    const updateP = () => {
        alert("warning", "In development")
    }

    if(!cookie.user_token){
      window.location.href = "/login"
    }else{
      return (
        <div className='dashboard'>
            <div className="d-flex">
            <Sidebar/>
  
            <div className="home w-100">
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
                                <label htmlFor="file">
                                <i class="fa-solid fa-plus"></i>
                                </label>
                                <input type="file" name="file" id="file" className='d-none' />
                            </div>
                            <p className="name fw-bold  mt-3">Username</p>
                            <button onClick={updateP} className="btn btn-success">Save changes</button>
                        </div>

                        <div className="form">
                            <form action=''>
                               <div>
                                    <label htmlFor="">Edit Fullname</label>
                                    <input type="text" placeholder='Enter your fullname' />
                               </div>
                               <div>
                                    <label htmlFor="">Email Address</label>
                                    <input type="email" placeholder='Enter your fullname' />
                               </div>
                               <div>
                                    <label htmlFor="">Change password</label>
                                    <input type="password" placeholder='********' />
                               </div>
                               <div>
                                    <label htmlFor="">Confirm Change password</label>
                                    <input type="password" placeholder='********' />
                               </div>
                               <div>
                                    <label htmlFor="">Change business name</label>
                                    <input type="text" placeholder='Enter your business name' />
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
