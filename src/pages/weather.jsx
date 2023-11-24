import React, { useRef } from 'react'
import Sidebar from '../components/sidebar'
import "/public/css/home.css"
import "/public/css/weather.css"
import farmer from "/img/farmer.png"
import logo from "/img/greenlogo.png"
import sun from "/img/sun.png"
import $ from 'jquery';
import {Bar, Line, Pie, PolarArea} from "react-chartjs-2"
import { Chart as Chartjs, BarElement, CategoryScale, LinearScale, Tooltip} from 'chart.js'
import { CookiesProvider, useCookies, } from "react-cookie";

Chartjs.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
)

export default function Weather() {
  const [cookie, setCookie, removeCookie] = useCookies("")

  let newDate = new Date()
  let hrs = newDate.getHours();
  let mins = newDate.getMinutes();

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', "Dec"],
    datasets: [{
      label: 'Rain Quantity',
      data: [0.1, 0.9, 0.3, 0.5, 0.2, 0.3, 0.3, 0.3, 0.2, 0.8, 0.6, 0.4],
      borderWidth: 1,
      backgroundColor: ["green"],
    }]
  }

  const options = {
    Plugins : {
      legend : false
    },
    scales : {
      x : {
        grid :{
          display : false,
          padding: 10,
          drawOnChartArea: false,
        } 
      },
    }
  }

  if(!cookie.user_token){
    window.location.href = "/login"
  }
  else{
    return (
      <div className='dashboard'>
          <div className="d-flex">
          <Sidebar/>

          <div className="home w-100">
              <i class="fa-solid fa-bars"></i>
              <div className="header d-flex">
              <i className="fa-regular fa-bell text-muted mb-3 mx-2 mt-2"></i>
              <img src={farmer} alt="" />
              </div>
          </div>

          </div>

          

          <div className="content weather">
            <div className="weather_content d-flex">

                <div className="section">

                  <div className="temp mt-2 text-center">
                    <p className="">Temperature <i class="fa-solid fa-temperature-low"></i></p>
                  </div>

                  <div className="d-flex degree">
                    <div className='outdoor'>
                      <p className="name mb-1">Indoor</p>
                      <p className="num">80<span><i class="fa-regular fa-circle"></i></span></p>
                    </div>
                    <div className='indoor'>
                      <p className="name mb-1">Indoor</p>
                      <p className="num">90<span><i class="fa-regular fa-circle"></i></span></p>
                    </div>
                  </div>

                  <div className="humidity mt-5 text-center">
                    <p className="name mb-1">Humidity <i class="fa-solid fa-droplet"></i></p>
                    <p className="num">90%</p>
                  </div>

                </div>

                <div className="section">
                  <div className="temp mt-2 text-center">
                    <p className="">Rain Quantity <i class="fa-solid fa-cloud-showers-water"></i></p>
                  </div>
                  <Bar data={data} options={options}></Bar>
                </div>

                <div className="section">
                  <div className="temp mt-2 text-center">
                    <p className="">Forecast <i className="fa-solid fa-cloud"></i></p>
                    <div className="img text-center">
                      <img src={sun} alt="" />
                      <p className="mb-1">Partly cloudy</p>
                      <p className='mb-0 time'>{hrs}:{mins}</p>
                    </div>
                    
                    <div className="icons d-flex">
                      <div>
                        <i class="fa-solid fa-cloud-rain"></i>
                        <p className="">10:00</p>
                      </div>
                      <div>
                        <i class="fa-solid fa-cloud-moon-rain"></i>
                        <p className="">11:00</p>
                      </div>
                      <div>
                        <i class="fa-solid fa-cloud-showers-water"></i>
                        <p className="">12:00</p>
                      </div>
                      <div>
                        <i class="fa-solid fa-cloud-showers-heavy"></i>
                        <p className="">13:00</p>
                      </div>
                      <div>
                        <i className="fa-solid fa-cloud"></i>
                        <p className="">11:00</p>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="section">
                  <div className="pest temp mt-2 text-center">
                    <p className="mb-4">Pest control <i class="fa-solid fa-spaghetti-monster-flying"></i></p>
                    <div className="search">
                      <input type="text"  placeholder='Crop name'/>
                      <button className='btn'><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <p className="text-center mt-4">Pest</p>
                    <div className="d-flex mt-2">
                      <p className="mb-0">Mealy bugs</p>
                      <p className="">True bugs</p>
                      <p className="">Scale insects</p>
                      <p className="">Thrips</p>
                    </div>
                  </div>
                </div>

            </div>
          </div>
      </div>
    )
  }
}
