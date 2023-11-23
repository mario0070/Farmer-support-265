import React from 'react'
import Sidebar from '../components/sidebar'
import "/public/css/home.css"
import "/public/css/crop.css"
import farmer from "/img/farmer.png"
import logo from "/img/greenlogo.png"
import yam from "/img/yam.png"
import cocoa from "/img/cocoa.png"
import { Link } from 'react-router-dom'
import { CookiesProvider, useCookies, } from "react-cookie";

export default function Crop() {
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
              <Link to="/my-produce" className="btn btn-success my_listing text-white">View my listings</Link>
              <i className="fa-regular fa-bell text-muted mb-3 mx-2 mt-2"></i>
              <img src={farmer} alt="" />
              </div>
          </div>

          </div>

          

          <div className="content produce_listing mt-2">
              <div className="prod_container d-flex">

                <div className="produce">
                  <img src={cocoa} alt="" /> 
                  <div className="prod_info p-3">
                    <p className="prod_name mb-1">Name</p>
                    <p className="prod_price fw-bold">₦500</p>
                    <p className="prod_biz_name text-end">Business Name</p>
                  </div>
                </div>

                <div className="produce">
                  <img src={cocoa} alt="" /> 
                  <div className="prod_info p-3">
                    <p className="prod_name mb-1">Name</p>
                    <p className="prod_price fw-bold">₦500</p>
                    <p className="prod_biz_name text-end">Business Name</p>
                  </div>
                </div>

                
                <div className="produce">
                  <img src={cocoa} alt="" /> 
                  <div className="prod_info p-3">
                    <p className="prod_name mb-1">Name</p>
                    <p className="prod_price fw-bold">₦500</p>
                    <p className="prod_biz_name text-end">Business Name</p>
                  </div>
                </div>
                
                <div className="produce">
                  <img src={cocoa} alt="" /> 
                  <div className="prod_info p-3">
                    <p className="prod_name mb-1">Name</p>
                    <p className="prod_price fw-bold">₦500</p>
                    <p className="prod_biz_name text-end">Business Name</p>
                  </div>
                </div>
              </div>   
          </div>
    </div>
    )
  }
}
