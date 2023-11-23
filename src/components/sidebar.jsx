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
                        <Link className="nav-link" to="/dashboard"><i class="fa-solid fa-bars"></i> Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/weather"><i class="fa-solid fa-cloud"></i> Weather Forecast</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/produce-listing"><i class="fa-solid fa-list"></i> Produce Listing</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/chat-bot"><i class="fa-brands fa-bots"></i> Chat Bot</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/market-insight"><i class="fa-solid fa-chart-simple"></i> Market Insight</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/articles"><i class="fa-solid fa-newspaper"></i> Articles</Link>
                    </li>
                </ul>
            </div>
        </nav>

        <nav className="navbar bottom-link mt-4 navbar-expand-sm navbar-light">
            <div className="w-100">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link"><i class="fa-solid fa-gear"></i> Settings</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" ><i class="fa-solid fa-power-off"></i> Log Out</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
