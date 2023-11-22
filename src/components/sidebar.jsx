import React from 'react'
import "/public/css/sidebar.css"
import logo from "/img/greenlogo.png"
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="img text-center mt-3">
           <a href="/">
            <h5 className=''>
                <img src={logo} alt="" />
                Sproutt
            </h5>
           </a>
        </div>
        <nav className="navbar mt-3 navbar-expand-sm navbar-light">
            <div className="w-100">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/dashboard"><i class="fa-solid fa-paper-plane mx-1"></i> Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/weather"><i class="fa-solid fa-paper-plane mx-1"></i> Weather forecast</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/crop-management"><i class="fa-solid fa-paper-plane mx-1"></i> Crop Management</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/chat-bot"><i class="fa-solid fa-paper-plane mx-1"></i> Chat Bot</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/market-insight"><i class="fa-solid fa-paper-plane mx-1"></i> Market Insight</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/articles"><i class="fa-solid fa-paper-plane mx-1"></i> Articles</Link>
                    </li>
                </ul>
            </div>
        </nav>

        <nav className="navbar bottom-link mt-4 navbar-expand-sm navbar-light">
            <div className="w-100">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link"><i class="fa-solid fa-paper-plane mx-1"></i> Settings</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" ><i class="fa-solid fa-paper-plane mx-1"></i>Log Out</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
