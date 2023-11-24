import React, { useEffect, useRef } from 'react'
import Sidebar from '../components/sidebar'
import "/public/css/home.css"
import "/public/css/article.css"
import farmer from "/img/farmer.png"
import logo from "/img/greenlogo.png"
import book from "/img/book.png"
import { CookiesProvider, useCookies, } from "react-cookie";

export default function Articles() {
  const [cookie, setCookie, removeCookie] = useCookies("")

  if(!cookie.user_token){
    window.location.href = "/login"
  }else{
    return (
      <div className='dashboard'>
          <div className="d-flex">
          <Sidebar/>

          <div className="home w-100">
            <i class="fa-solid fa-bars"></i>
              <div className="header d-flex">
              <i className="fa-regular fa-bell text-muted mb-3 mx-2 mt-2"></i>
              <img src={farmer} alt="" />
              </div>
          </div>

          </div>

          

          <div className="content article mt-2">
            <div className="article_container d-flex">

              <div className="sing_article">
                <img src={book} alt="" />  
                <p className="name text-center">cocoa seed</p> 
                <p className="text-end mb-1 mt-2">read <i class="fa-solid fa-arrows-turn-right"></i></p>             
              </div>

              <div className="sing_article">
                <img src={book} alt="" />  
                <p className="name text-center">cocoa seed</p> 
                <p className="text-end mb-1 mt-2">read <i class="fa-solid fa-arrows-turn-right"></i></p>             
              </div>


            </div> 
          </div>
      </div>
    )
  }
}
