import React, { useState } from 'react'
import Sidebar from '../components/sidebar'
import "/public/css/home.css"
import "/public/css/crop.css"
import farmer from "/img/farmer.png"
import logo from "/img/greenlogo.png"
import yam from "/img/yam.png"
import cocoa from "/img/cocoa.png"
import $ from 'jquery';

export default function Person_produce() {
    const [show, setShow] = useState(false)

    const showForm = () => {
        setShow(true)
        $(".produce_form").show();
        console.log(show)
    }

    return (
        <div className='dashboard'>
            <div className="d-flex">
            <Sidebar/>
    
            <div className="home w-100">
                <div className="header d-flex">
                <a href="/produce-listing" className="btn btn-success my_listing text-white">View market listings</a>
                <i className="fa-regular fa-bell text-muted mb-3 mx-2 mt-2"></i>
                <img src={farmer} alt="" />
                </div>
            </div>
    
            </div>
    
            <div className="content produce_listing mt-2">
                <div className="prod_container d-flex">
    
                  { !show &&
                    <div onClick={showForm} className="produce text-center add_produce">
                        <i className="fa-solid fa-plus"></i>
                    </div>
                  }

                  { show &&
                    <div className="produce produce_form">
                    <p className="text-center">Fill products in quantity such as, “A bag of rice”</p>
                    <form action="">
                        <input type="text" placeholder='Enter product name'/>
                        <input type="text" placeholder='product price' />
                        <label htmlFor="file" className='d-block mb-4'>Choose images</label>
                        <input type="file" className='d-none ' name="file" id="file" />
                        <button className='btn btn-success text-white mt-2'>List product</button>
                        <p onClick={() => {setShow(!show)}} className='btn text-danger fw-bold mt-2 mx-2'>Go back</p>
                    </form>
                  </div>
                  }
    
                  <div className="produce">
                    <img src={yam} alt="" /> 
                    <div className="prod_info p-3">
                      <p className="prod_name mb-1">Name</p>
                      <p className="prod_price fw-bold">₦500</p>
                      <p className="prod_biz_name text-end">Business Name</p>
                    </div>
                  </div>
    
                </div>   
            </div>
      </div>
    )
}
