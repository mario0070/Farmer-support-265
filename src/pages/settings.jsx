import React, { useEffect, useRef } from 'react'
import Sidebar from '../components/sidebar'
import "/public/css/home.css"
import "/public/css/article.css"
import farmer from "/img/farmer.png"
import logo from "/img/greenlogo.png"
import book from "/img/book.png"
import { CookiesProvider, useCookies, } from "react-cookie";

export default function Settings() {
    const [cookie, setCookie, removeCookie] = useCookies("")

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
  
            <div className="content article mt-2">
                <div className="setting_container">

                    <div className="d-flex">
                        <div className="img">
                            <img src={farmer} alt="" />
                            <p className="name fw-bold">Username</p>
                        </div>

                        <div className="form">
                            
                        </div>

                    </div>

                </div>
            </div>
        </div>
      )
    }
}
