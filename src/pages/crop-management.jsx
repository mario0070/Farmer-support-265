import React from 'react'
import Sidebar from '../components/sidebar'
import "/public/css/home.css"
import "/public/css/crop.css"
import farmer from "/img/farmer.png"
import logo from "/img/greenlogo.png"
import yam from "/img/yam.png"

export default function Crop() {
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

        

        <div className="content produce_listing mt-5">
            <div className="prod_container d-flex">

              <div className="produce">
                <img src={yam} alt="" /> 
                <div className="prod_info p-3">
                  <p className="prod_name mb-1">Name</p>
                  <p className="prod_price fw-bold">₦500</p>
                  <p className="prod_biz_name text-end">Business Name</p>
                </div>
              </div>

              <div className="produce">
                <img src={yam} alt="" /> 
                <div className="prod_info p-3">
                  <p className="prod_name mb-1">Name</p>
                  <p className="prod_price fw-bold">₦500</p>
                  <p className="prod_biz_name text-end">Business Name</p>
                </div>
              </div>

              
              <div className="produce">
                <img src={yam} alt="" /> 
                <div className="prod_info p-3">
                  <p className="prod_name mb-1">Name</p>
                  <p className="prod_price fw-bold">₦500</p>
                  <p className="prod_biz_name text-end">Business Name</p>
                </div>
              </div>
              
              <div className="produce">
                <img src={yam} alt="" /> 
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
