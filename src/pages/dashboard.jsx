import React from 'react'
import Sidebar from '../components/sidebar'
import "/public/css/home.css"
import farmer from "/img/farmer.png"

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <div className="d-flex">
        <Sidebar/>

        <div className="home w-100">
          <div className="header d-flex">
            <i class="fa-solid fa-paper-plane mb-3 mx-2 mt-2"></i>
            <img src={farmer} alt="" />
          </div>
        </div>

      </div>

      

      <div className="content">
          <h1>jamiu</h1>
      </div>
    </div>
  )
}
