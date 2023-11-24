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

export default function Person_produce() {
  const [cookie, setCookie, removeCookie] = useCookies("")
  const [show, setShow] = useState(false)
  const [input, setInput] = useState("")
  const [produce, setProduce] = useState([])
  const [isLoaded, setisLoaded] = useState(false)
  const cropType = useRef("")
  const description = useRef("")
  const price = useRef("")

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

  var data = JSON.parse(Cookies.get('user_token'))
  let send = axios.create({
    baseURL: 'https://farmer-support-api.onrender.com/',
    headers: {
        "Authorization" : `Bearer ${data.token}`,
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
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
        "price": price.current.value
      })
      .then(res => {
        alert("success", "Product has been added")
        btn.innerHTML = `List product`
        cropType.current.value = ""
        description.current.value = ""
        price.current.value = ""
      })
      .catch(err => {
        btn.innerHTML = `List product`
        alert("error", "something went wrong")
        console.log(err)
      })
    }
  }

  const showForm = () => {
      setShow(true)
      $(".produce_form").show();
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
                <Link to="/produce-listing" className="btn btn-success my_listing text-white">View market listings</Link>
                <i className="fa-regular fa-bell text-muted mb-3 mx-2 mt-2"></i>
                <img src={farmer} alt="" />
                </div>
            </div>

            </div>

            <div className="content produce_listing mt-2">
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
                    {/* <p className="text-center">Fill products in quantity such as, “A bag of rice”</p> */}
                    <form action="" onSubmit={addProduce}>
                        <input onChange={e => setInput(e.target.value)} ref={cropType} type="text" placeholder='Enter product name'/>
                        <input onChange={e => setInput(e.target.value)} ref={price} type="text" placeholder='Product price' />
                        <input onChange={e => setInput(e.target.value)} ref={description} type="text" placeholder='Description' />
                        <label htmlFor="file" className='d-block mb-4'>Choose images</label>
                        <input type="file" className='d-none ' name="file" id="file" />
                        <button id='add' className='btn btn-success text-white mt-2'>List product</button>
                        <p onClick={() => {setShow(!show)}} className='btn text-danger fw-bold mt-2 mx-2'>Go back</p>
                    </form>
                  </div>
                  }
                  
                  {produce.map((val, index) => {
                    return (
                      <div className="produce">
                        <img src={fruits} alt="" /> 
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
