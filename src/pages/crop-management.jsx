import React, { useEffect, useState } from 'react'
import Sidebar from '../components/sidebar'
import "/public/css/home.css"
import "/public/css/crop.css"
import farmer from "/img/farmer.png"
import loader from "/img/loader.gif"
import { Link } from 'react-router-dom'
import { CookiesProvider, useCookies, } from "react-cookie";
import Cookies from 'js-cookie';
import axios from 'axios';
import { NumericFormat } from 'react-number-format';
import fruits from "/img/allfruits.jpg"

export default function Crop() {
  const [cookie, setCookie, removeCookie] = useCookies("")
  const [produce, setProduce] = useState([])
  const [isLoaded, setisLoaded] = useState(false)

  var data = JSON.parse(Cookies.get('user_token'))
  let send = axios.create({
    baseURL: 'https://farmer-support-api.onrender.com/',
    headers: {
        "Authorization" : `Bearer ${data.token}`,
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  });

  useEffect(() => {
    send.get("/produce",{
    })
    .then(res => {
      setisLoaded(true)
      setProduce(res.data.data)
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  },[])

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
              <Link to="/my-produce" className="btn btn-success my_listing text-white">View my listings</Link>
              <i className="fa-regular fa-bell text-muted mb-3 mx-2 mt-2"></i>
              <img src={farmer} alt="" />
              </div>
          </div>

          </div>

          

          <div className="content produce_listing mt-2">
            { isLoaded 
              ? <div className="prod_container d-flex">

                {produce.map((val, index) => {
                  return (
                    <div className="produce">
                      <img src={fruits} alt="" /> 
                      <div className="prod_info p-3">
                        <p className="prod_name mb-1 fw-bold">{val.cropType}</p>
                        <p className="prod_name mb-1">{val.description}</p>
                        <p className="prod_price fw-bold">₦{new Intl.NumberFormat('en-IN', {}).format(val.price)}</p>
                        <p className="prod_biz_name text-end">{val.farmName}</p>
                      </div>
                    </div>
                  )
                })}
                </div> 
                  

              : <div className="text-center mt-5">
                  <img src={loader} alt="" width={400} />
                </div>
                
            }
          </div>
    </div>
    )
    
  }
}
