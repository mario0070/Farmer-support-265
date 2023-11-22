import React from 'react'
import "/public/css/sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <nav className="navbar mt-5 navbar-expand-sm navbar-light">
            <div className="w-100">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#"><i class="fa-solid fa-paper-plane mx-1"></i> Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i class="fa-solid fa-paper-plane mx-1"></i> Weather forecast</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i class="fa-solid fa-paper-plane mx-1"></i> Crop Management</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i class="fa-solid fa-paper-plane mx-1"></i> Chat Bot</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i class="fa-solid fa-paper-plane mx-1"></i> Market Insight</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i class="fa-solid fa-paper-plane mx-1"></i> Articles</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
