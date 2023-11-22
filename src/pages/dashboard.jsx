import React from 'react'
import Sidebar from '../components/sidebar'
import "/public/css/home.css"
import logo from "/img/greenlogo.png"
import farmer from "/img/farmer.png"

export default function Dashboard() {
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

      

      <div className="content text-center mt-5">
          <img src={logo} alt="" />         
          <h1>Dashboard</h1>
      </div>
    </div>
  )
}
