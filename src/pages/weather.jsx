import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../components/sidebar'
import "/public/css/home.css"
import "/public/css/weather.css"
import farmer from "/img/farmer.png"
import logo from "/img/greenlogo.png"
import sun from "/img/sun.png"
import noDanger from "/img/d-no.png"
import dangeryes from "/img/d-yes.png"
import $ from 'jquery';
import {Bar, Line, Pie, PolarArea} from "react-chartjs-2"
import { Chart as Chartjs, BarElement, CategoryScale, LinearScale, Tooltip} from 'chart.js'
import { CookiesProvider, useCookies, } from "react-cookie";
import Axios from '../utils/axios'
import CustomSidebar from '../components/customSidebar'

Chartjs.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
)

export default function Weather() {
  const [cookie, setCookie, removeCookie] = useCookies("")
  const [pest, setPest] = useState(false)
  const [pestAlert, setPestalert] = useState("")
  const [showBar , setShow] = useState(false)

  let newDate = new Date()
  let hrs = newDate.getHours();
  let mins = newDate.getMinutes();

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', "Dec"],
    datasets: [{
      label: 'Rain Quantity',
      data: [0.1, 0.9, 0.3, 0.5, 0.2, 0.3, 0.3, 0.3, 0.2, 0.8, 0.6, 0.4],
      borderWidth: 0,
      backgroundColor: ["#00FF80"],
    }]
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
      },
    }
  }

 useEffect(() => {
  Axios.get("/pest/alert",{

  }).then(res => {
    // console.log(res,res.data.pests)
    if(res.data.alert == true){
      setPest(true)
      setPestalert(res.data.pests)
    }else{
      setPest(false)
      setPestalert(res.data.pests)
    }
  }).catch(err => {
    console.log(err)
  })
 })

  if(!cookie.user_token){
    window.location.href = "/login"
  }
  else{
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

          

          <div onClick={rmBar} className="content weather">
            <div className="weather_content d-flex">

                <div className="section">

                  <div className="temp mt-2 text-center">
                    <p className="">Temperature <i className="fa-solid fa-temperature-low"></i></p>
                  </div>

                  <div className="d-flex degree">
                    <div className='outdoor'>
                      <p className="name mb-1">Indoor</p>
                      <p className="num">80<span><i className="fa-regular fa-circle"></i></span></p>
                    </div>
                    <div className='indoor'>
                      <p className="name mb-1">Indoor</p>
                      <p className="num">90<span><i className="fa-regular fa-circle"></i></span></p>
                    </div>
                  </div>

                  <div className="humidity mt-5 text-center">
                    <p className="name mb-1">Humidity <i className="fa-solid fa-droplet"></i></p>
                    <p className="num">90%</p>
                  </div>

                </div>

                <div className="section">
                  <div className="temp mt-2 text-center">
                    <p className="">Rain Quantity <i className="fa-solid fa-cloud-showers-water"></i></p>
                  </div>
                  <div className="bar">
                    <Bar data={data} options={options}></Bar>
                  </div>
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
                        <i className="fa-solid fa-cloud-rain"></i>
                        <p className="">10:00</p>
                      </div>
                      <div>
                        <i className="fa-solid fa-cloud-moon-rain"></i>
                        <p className="">11:00</p>
                      </div>
                      <div>
                        <i className="fa-solid fa-cloud-showers-water"></i>
                        <p className="">12:00</p>
                      </div>
                      <div>
                        <i className="fa-solid fa-cloud-showers-heavy"></i>
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
                    <p className="">Pest Control <i class="fa-solid fa-spaghetti-monster-flying"></i></p>
                    <img src={!pest ? noDanger : dangeryes} alt="" />
                    {!pest ? <h4 className='mt-4 fs-5'>{pestAlert}</h4> : <h4 className='text-danger mt-4'>{pestAlert}</h4>}
                    
                    {pest && 
                     <> 
                     <p className="fw-bold mb-1 mt-4">Pests</p>
                      <div className="d-flex">
                        <p className="">Groundnut Aphid</p>
                        <p className="">Groundnut Aphid</p>
                      </div>
                     </>
                    }
                  </div>
                </div>

            </div>
          </div>
      </div>
    )
  }
}
