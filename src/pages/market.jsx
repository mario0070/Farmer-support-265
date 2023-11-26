import React, { useState } from 'react'
import Sidebar from '../components/sidebar'
import "/public/css/home.css"
import "/public/css/market.css"
import logo from "/img/greenlogo.png"
import farmer from "/img/farmer.png"
import { CookiesProvider, useCookies, } from "react-cookie";
import {Bar, Line, Pie, PolarArea} from "react-chartjs-2"
import { Chart as Chartjs, BarElement, CategoryScale, LinearScale, LineElement, Tooltip, PointElement } from 'chart.js'
import CustomSidebar from '../components/customSidebar'


Chartjs.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
)

export default function Market() {
  const [cookie, setCookie, removeCookie] = useCookies("")
  const [showBar , setShow] = useState(false)

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', "Dec"],
    datasets: [{
      label: 'Range',
      data: [20, 49, 60, 35, 55, 15, 70, 35, 50, 24, 70, 45],
      borderWidth: 1,
      borderColor: ["green"],
      pointBorderColor: ["green"],
    }]
  }

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', "Dec"],
    datasets: [{
      label: 'Range',
      data: [20, 49, 60, 35, 55, 15, 70, 35, 50, 24, 70, 45],
      borderColor: ["green"],
      pointBorderColor: ["#00FF80"],
      backgroundColor: ["#00FF80"]
    }]
  }

  const options = {
    Plugins : {
      legend: {
        labels: {
            fontSize: 22
        }
      }
    },
    scales : {
      x : {
        grid :{
          display : false,
          drawOnChartArea: false,
        } 
      },
      y : {
        grid :{
          display : false,
          drawOnChartArea: false,
        } ,
        ticks:{
          color: ["green"],
          callback: (value) => value + "k"
        }
      },
    }
  }

  const bar = () => {
    var custom_sidebar = document.querySelectorAll(".custom_sidebar")
    custom_sidebar.forEach((val,index) => {
      val.classList.add("showcustom")
      setShow(true)
    })
  }

  var custom_sidebar = document.querySelectorAll(".custom_sidebar")
  custom_sidebar.forEach((val,index) => {
    val.addEventListener("click",() => {
      val.classList.remove("showcustom")
    })
    
  })

  var rmBar = () => {
    setShow(false)
  }

  if(showBar){
    custom_sidebar.forEach((val,index) => {
      val.classList.add("showcustom")
    })
  }else{
    custom_sidebar.forEach((val,index) => {
      val.classList.remove("showcustom")
    })
  }
  

  if(!cookie.user_token){
    window.location.href = "/login"
  }else{
    return (
      <div className='dashboard'>
        <CustomSidebar/>
          <div className="d-flex">
          <Sidebar/>

          <div className="home w-100">
              <div onClick={bar} className='show_custombar'>
                <i className="fa-solid fa-bars"></i>
              </div>
              <div className="header d-flex">
              <i className="fa-regular fa-bell text-muted mb-3 mx-2 mt-2"></i>
              <img src={farmer} alt="" />
              </div>
          </div>

          </div>

          

          <div onClick={rmBar} className="content market">
              <div className="market_container">
                  <div className="chart">
                    <div className="d-flex mb-3">
                      <p className="mb-0 name fw-bold">Rice</p>
                      <p className="mb-0">Quantity</p>
                      <p className="mb-0">2023</p>
                    </div>

                    <Line data={data} options={options}></Line>
                  </div>
                  
                  <div className="chart">
                  <div className="d-flex mb-3">
                      <p className="mb-0 name fw-bold">Rice</p>
                      <p className="mb-0">Quantity</p>
                      <p className="mb-0">2023</p>
                    </div>
                    <Bar data={barData} options={options}></Bar>
                  </div>
                  <p className='text-muted text-center'>Note: these are approximated values</p>
              </div>
          </div>
      </div>
    )
  }
}
