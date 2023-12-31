import React, { useEffect, useState } from 'react'
import Sidebar from '../components/sidebar'
import "/public/css/home.css"
import "/public/css/market.css"
import logo from "/img/greenlogo.png"
import farmer from "/img/farmer.png"
import { CookiesProvider, useCookies, } from "react-cookie";
import {Bar, Line, Pie, PolarArea} from "react-chartjs-2"
import { Chart as Chartjs, BarElement, CategoryScale, LinearScale, LineElement, Tooltip, PointElement } from 'chart.js'
import CustomSidebar from '../components/customSidebar'
import Cookies from 'js-cookie';
import axios from 'axios';


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
  const [lineChart , setlineChart] = useState([])
  const [produce , setproduce] = useState("Rice")

  const data = {
    labels: lineChart.map((val) => {
            return `${val[0].split(" ")[2]} ${val[0].split(" ")[1]}`
          }),
    datasets: [{
      label: 'Price',
      data: lineChart.map((val) => {
        return `${val[1].averagePrice} `
      }),
      borderWidth: 1,
      borderColor: ["green"],
      pointBorderColor: ["green"],
    }]
  }

  const barData = {
    labels:  lineChart.map((val) => {
      return `${val[0].split(" ")[2]} ${val[0].split(" ")[1]}`
    }),
    datasets: [{
      label: 'Quantity',
      data: lineChart.map((val) => {
        return val[1].produceCount
      }),
      borderColor: ["green"],
      pointBorderColor: ["#00FF80"],
      backgroundColor: ["#00FF80"]
    }]
  }

  const options = {
    scales : {
      y : {
        beginAtZero: true,
        ticks:{
          beginAtZero: true,
          color: ["green"],
          // callback: (value) => "₦" + value
        }
      },
    }
  }

  const baroptions = {
    scales : {
      y : {
        ticks:{
          color: ["green"],
          callback: (value) => value
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
    var tk = JSON.parse(Cookies.get('user_token'))
    let send = axios.create({
      baseURL: 'https://farmer-support-api.onrender.com/',
      headers: {
          "Authorization" : `Bearer ${tk.token}`,
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          'Content-Type': 'multipart/form-data'
      },
    });

    useEffect(() => {
      send.get(`/produce/insights?crop=${produce}`,{
      })
      .then(res => {
        // console.log(res)
        setlineChart(Object.entries(res.data))
      })
      .catch(err => {
        console.log(err)
      })
    },[])

    const filterProd = () => {
      var btn = document.getElementById("search")
      btn.innerHTML = `Process <div class="spinner-border spinner-border-sm"></div>`
      send.get(`/produce/insights?crop=${produce}`,{
      })
      .then(res => {
        setlineChart(Object.entries(res.data))
        btn.innerHTML = `search produce`
      })
      .catch(err => {
        console.log(err)
      })
    }

    return (
      <div className='dashboard'>
        <CustomSidebar/>
          <div className="d-flex">
          <Sidebar/>

          <div className="home w-100">
              <div onClick={bar} className='show_custombar'>
                <i className="fa-solid fa-bars"></i>
              </div>
              <div className="search">
                <input onChange={e => setproduce(e.target.value)} type="text" value={produce} placeholder='filter produce base on your location'/>
                <button onClick={filterProd} className="btn" id='search'>Filter Produce</button>
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
                      <p className="mb-0 name fw-bold text-capitalize">{produce}</p>
                      <p className="mb-0">Price ₦</p>
                      <p className="mb-0">2023</p>
                    </div>

                    <Line data={data} options={options}></Line>
                  </div>
                  
                  <div className="chart">
                  <div className="d-flex mb-3">
                      <p className="mb-0 name fw-bold text-capitalize">{produce}</p>
                      <p className="mb-0">Quantity</p>
                      <p className="mb-0">2023</p>
                    </div>
                    <Bar data={barData} options={baroptions}></Bar>
                  </div>
                  <p className='text-muted text-center'>Note: these are approximated values</p>
              </div>
          </div>
      </div>
    )
  }
}
