import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../components/sidebar'
import "/public/css/home.css"
import "/public/css/crop.css"
import farmer from "/img/farmer.png"
import yam from "/img/yam.png"
import $ from 'jquery';
import { Link } from 'react-router-dom'
import { CookiesProvider, useCookies, } from "react-cookie";
import Cookies from 'js-cookie';
import axios from 'axios';
import { NumericFormat } from 'react-number-format';
import loader from "/img/loader.gif"
import fruits from "/img/allfruits.jpg"
import CustomSidebar from '../components/customSidebar'

export default function Person_produce() {
  const [cookie, setCookie, removeCookie] = useCookies("")
  const [show, setShow] = useState(false)
  const [input, setInput] = useState("")
  const [produce, setProduce] = useState([])
  const [isLoaded, setisLoaded] = useState(false)
  const [barshow, setbarshow] = useState(false)
  const cropType = useRef("")
  const description = useRef("")
  const price = useRef("")
  const file = useRef("")
  const [img, setImg] = useState("")

  const getProduceImg = (e) => {
    console.log(img[0])
    Swal.fire({
      text: "Choose this image",
      imageUrl: URL.createObjectURL(img[0]),
      imageWidth: 300,
      imageHeight: 300,
    });
  }
  

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
      setbarshow(true)
    })
  }

  var custom_sidebar = document.querySelectorAll(".custom_sidebar")
  custom_sidebar.forEach((val,index) => {
    val.addEventListener("click",() => {
      val.classList.remove("showcustom")
    })
    
  })

  var rmBar = () => {
    setbarshow(false)
  }

  if(barshow){
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
          'Content-Type': 'multipart/form-data'
      },
    });

    const confirmDelete = (id) => {
      send.delete(`/produce/me?id=${id}`,{
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    }

    const deleteProduce = (id) => {
      Swal.fire({
          title: "Are you sure?",
          text: "Deleting this produce cannot be undo",
          icon: "warning",
          color : "grey",
          showCancelButton: true,
          confirmButtonColor: "green",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Delete!"
        }).then((result) => {
          if (result.isConfirmed) {
            confirmDelete(id)
              Swal.fire({
                  title: "Deleted!",
                  text: "Produce is deleted successfully",
                  icon: "success"
              });
            }
        });
    }

    useEffect(() => {
      send.get("/produce/me",{
      })
      .then(res => {
        setisLoaded(true)
        console.log(res)
        setProduce(res.data.myProduces)
      })
      .catch(err => {
        console.log(err)
      })
    },[produce]
    )

    const addProduce = (e) => {
      e.preventDefault()
      if(cropType.current.value == "" || description.current.value == ""  || price.current.value == ""){
        alert("warning", "Fill all the fields")
      }else{
        var btn = document.getElementById("add")
        btn.innerHTML = `Process <div class="spinner-border spinner-border-sm"></div>`
        send.post("/produce/me",{
          "cropType": cropType.current.value,
          "description": description.current.value,
          "price": price.current.value,
          "file" : img[0],
        })
        .then(res => {
          alert("success", "Produce has been added")
          btn.innerHTML = `List produce`
          cropType.current.value = ""
          description.current.value = ""
          price.current.value = ""
        })
        .catch(err => {
          btn.innerHTML = `List produce`
          alert("error", "something went wrong")
          console.log(err,img)
        })
      }
    }

    const showForm = () => {
        setShow(true)
        $(".produce_form").show();
    }

    return (
        <div className='dashboard'>
          <CustomSidebar/>
            <div className="d-flex">
            <Sidebar/>

            <div className="home w-100">
                <div className='show_custombar' onClick={bar}>
                  <i className="fa-solid fa-bars"></i>
                </div>
                <div className="header d-flex">
                <Link to="/produce-listing" className="btn btn-success my_listing text-white">View market listings</Link>
                <i className="fa-regular fa-bell text-muted mb-3 mx-2 mt-2"></i>
                <img src={farmer} alt="" />
                </div>
            </div>

            </div>

            <div onClick={rmBar} className="content produce_listing mt-2">
              { isLoaded 
                ? <div className="prod_container d-flex">

                  { !show &&
                    <div onClick={showForm} className="produce text-center add_produce">
                        <i className="fa-solid fa-plus"></i>
                        <p className="text-muted">Add produce</p>
                    </div>
                  }

                  { show &&
                    <div className="produce produce_form">
                    <form action="" onSubmit={addProduce}>
                        <input onChange={e => setInput(e.target.value)} ref={cropType} type="text" placeholder='Enter produce name'/>
                        <input onChange={e => setInput(e.target.value)} ref={price} type="text" placeholder='Produce price' />
                        <input onChange={e => setInput(e.target.value)} ref={description} type="text" placeholder='Description' />
                        <label htmlFor="file" className='d-block mb-4'>Choose images</label>
                        <input onChange={(e) => {setImg(e.target.files)}} ref={file} type="file" className='d-none file' name="file" id="file" />
                        <button id='add' className='btn btn-success text-white mt-2'>List produce</button>
                        <p onClick={() => {setShow(!show)}} className='btn text-danger fw-bold mt-2 mx-2'>Go back</p>
                        <p className="" onClick={getProduceImg}>view uploaded image</p>
                    </form>
                  </div>
                  }
                  
                  {produce.map((val, index) => {
                    return (
                      <div className="produce">
                        <img src={val.imageUrl ? val.imageUrl : fruits} alt="" /> 
                        <div className="prod_info p-3">
                          <p className="prod_name mb-1 fw-bold">{val.cropType}</p>
                          <p className="prod_name mb-1">{val.description}</p>
                          <p className="prod_price fw-bold">₦{new Intl.NumberFormat('en-IN', {}).format(val.price)}</p>
                          <p className="prod_biz_name text-end">{val.farmName}</p>
                          <p className="text-start mb-0"><i onClick={() => deleteProduce(val._id)} class="fa-solid fa-trash text-danger"></i></p>
                        </div>
                      </div>
                    )
                  })}
                  </div> 

                :<div className="text-center mt-5">
                  <img src={loader} alt="" width={400} />
                </div>
              }
            </div>
      </div>
    )
  }
}
