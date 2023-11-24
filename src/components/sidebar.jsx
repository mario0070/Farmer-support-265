import React from 'react'
import "/public/css/sidebar.css"
import logo from "/img/greenlogo.png"
import { Link } from 'react-router-dom'
import Axios from '../utils/axios'
import { CookiesProvider, useCookies, } from "react-cookie";

export default function Sidebar() {
    const [cookie, setCookie, removeCookie] = useCookies(["user_token"])

    const logout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You are logging out your account",
            icon: "warning",
            color : "grey",
            showCancelButton: true,
            confirmButtonColor: "green",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log out!"
          }).then((result) => {
            if (result.isConfirmed) {
                removeCookie(["user_token"])
                Swal.fire({
                    title: "Logged out!",
                    text: "You are logged out.",
                    icon: "success"
                });
            }
        });
    }

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
                        <Link className="nav-link" to="/dashboard"><i className="fa-solid fa-bars"></i> Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/weather"><i className="fa-solid fa-cloud"></i> Weather Forecast</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/produce-listing"><i className="fa-solid fa-list"></i> Produce Listing</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/chat-bot"><i className="fa-brands fa-bots"></i> Chat Bot</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/market-insight"><i className="fa-solid fa-chart-simple"></i> Market Insight</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/articles"><i className="fa-solid fa-newspaper"></i> Articles</Link>
                    </li>
                </ul>
            </div>
        </nav>

        <nav className="navbar bottom-link mt-4 navbar-expand-sm navbar-light">
            <div className="w-100">
                <ul className="navbar-nav">
                    <li  className="nav-item">
                        <Link to="/account-settings" className="nav-link"><i className="fa-solid fa-gear"></i> Settings</Link>
                    </li>
                    <li className="nav-item">
                        <Link  onClick={logout} className="nav-link" ><i className="fa-solid fa-power-off"></i> Log Out</Link>
                    </li>
                </ul>
            </div>
        </nav>

        <div className="offcanvas offcanvas-start show_sidebar">
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
                            <Link className="nav-link" to="/dashboard"><i className="fa-solid fa-bars"></i> Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/weather"><i className="fa-solid fa-cloud"></i> Weather Forecast</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/produce-listing"><i className="fa-solid fa-list"></i> Produce Listing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/chat-bot"><i className="fa-brands fa-bots"></i> Chat Bot</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/market-insight"><i className="fa-solid fa-chart-simple"></i> Market Insight</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/articles"><i className="fa-solid fa-newspaper"></i> Articles</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <nav className="navbar bottom-link mt-4 navbar-expand-sm navbar-light">
                <div className="w-100">
                    <ul className="navbar-nav">
                        <li  className="nav-item">
                            <Link to="/account-settings" className="nav-link"><i className="fa-solid fa-gear"></i> Settings</Link>
                        </li>
                        <li className="nav-item">
                            <Link  onClick={logout} className="nav-link" ><i className="fa-solid fa-power-off"></i> Log Out</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    </div>
  )
}
