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
import fruits from "/img/allfruits.jpg"
import CustomSidebar from '../components/customSidebar'

export default function Crop() {
  const [cookie, setCookie, removeCookie] = useCookies("")
  const [produce, setProduce] = useState([])
  const [isLoaded, setisLoaded] = useState(false)
  const [page, setPage] = useState(1)
  const [total, settotal] = useState("")
  const [showBar , setShow] = useState(false)

  const alert = (icon, text) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });

    Toast.fire({
      icon: icon,
      title: text
    });
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
      send.get(`/produce/?page=${page}`,{
      })
      .then(res => {
        setisLoaded(true)
        setProduce(res.data.data)
        settotal(res.data["meta-data"]["total-pages"])
        // console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    },[])

    const dataPaginate = (pageNum) => {
      if(pageNum == "next"){
        setPage(page + 1)
        if((page + 1 ) > (total)){
          setPage(page)
          alert("info", "No more produce to view")
        }
        else{
          setisLoaded(false)
          send.get(`/produce/?page=${page + 1}`,{
          })
          .then(res => {
            setisLoaded(true)
            setProduce(res.data.data)
            settotal(res.data["meta-data"]["total-pages"])
          })
          .catch(err => {
            alert("error", "Something went wrong")
            console.log(err)
          })
        }
      }else{
        setPage(page - 1)
        if((page - 1 ) < 1){
          setPage(1) 
          alert("info", "Click next to view more")
        }
        else{
          setisLoaded(false)
          send.get(`/produce/?page=${page - 1}`,{
          })
          .then(res => {
            setisLoaded(true)
            setProduce(res.data.data)
            settotal(res.data["meta-data"]["total-pages"])
          })
          .catch(err => { 
            alert("error", "Something went wrong")
            console.log(err)
          })
        }
      }
      
      
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
              <div className="header d-flex">
              <Link to="/my-produce" className="btn btn-success my_listing text-white">View my listings</Link>
              <i className="fa-regular fa-bell text-muted mb-3 mx-2 mt-2"></i>
              <img src={farmer} alt="" />
              </div>
          </div>

          </div>

          

          <div onClick={rmBar} className="content produce_listing mt-2">
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

          <div className="pagination fixed-bottom">
            <div className="info">
            <ul class="d-flex paginate">
            <li><a onClick={() => dataPaginate("prev")} className='active'><i class="fa-solid fa-angles-left"></i></a></li>
            <li><a className='outof'>{page} out of {total} pages</a></li>
             <li><a onClick={() => dataPaginate("next")} className='active'><i class="fa-solid fa-angles-right"></i></a></li>

            </ul>
            </div>
          </div>
    </div>
    )
    
  }
}
