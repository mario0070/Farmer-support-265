import React from 'react'
import Sidebar from '../components/sidebar'
import "/public/css/home.css"
import "/public/css/market.css"
import logo from "/img/greenlogo.png"
import farmer from "/img/farmer.png"
import { CookiesProvider, useCookies, } from "react-cookie";
import {Bar, Line, Pie, PolarArea} from "react-chartjs-2"
import { Chart as Chartjs, BarElement, CategoryScale, LinearScale, LineElement, Tooltip, PointElement } from 'chart.js'


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

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', "Dec"],
    datasets: [{
      label: 'Range',
      data: [20, 49, 60, 35, 55, 15, 70, 35, 50, 24, 70, 45],
      borderWidth: 2,
      borderColor: ["green"],
      pointBorderColor: ["transparent"],
      tension: 0.4
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

  if(!cookie.user_token){
    window.location.href = "/login"
  }else{
    return (
      <div className='dashboard'>
          <div className="d-flex">
          <Sidebar/>

          <div className="home w-100">
              <div data-bs-toggle="offcanvas" data-bs-target=".show_sidebar">
                <i className="fa-solid fa-bars"></i>
              </div>
              <div className="header d-flex">
              <i className="fa-regular fa-bell text-muted mb-3 mx-2 mt-2"></i>
              <img src={farmer} alt="" />
              </div>
          </div>

          </div>

          

          <div className="content market">
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
                    <Line data={data} options={options}></Line>
                  </div>
                  <p className='text-muted text-center'>Note: these are approximated values</p>
              </div>
          </div>
      </div>
    )
  }
}
