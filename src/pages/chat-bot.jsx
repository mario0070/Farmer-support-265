import React, { useRef, useState } from 'react'
import Sidebar from '../components/sidebar'
import "/public/css/home.css"
import "/public/css/chat-bot.css"
import farmer from "/img/farmer.png"
import $ from 'jquery';
import {getCurrentDate} from './../components/date'
import { CookiesProvider, useCookies } from "react-cookie";


export default function ChatBot() {
  const [msg, setMSg] = useState("")
  const [cookie, setCookie, removeCookie] = useCookies("")
  const msgInputs = useRef("")

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

  const sendMsg = () => {
    if(msgInputs.current.value != ""){
      $(".msg-container").append(`
      <div class="wrap2">
      <div class="sentMsg">
          <div class="myMsg">
              <p class="mb-0 p-2">${msgInputs.current.value}</p>
          </div>
        </div>
      </div>`)
      $(".msg-container").scrollTop($(".msg-container").height());
      msgInputs.current.value = ""
    }else{
      alert("warning","Please type a message")
    }
  }

  const msgInput = (e) => {
    setMSg(e.target.value)
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
            <div data-bs-toggle="offcanvas" data-bs-target=".show_sidebar">
              <i class="fa-solid fa-bars"></i>
            </div>
          <div className="header d-flex">
            <i className="fa-regular fa-bell text-muted mb-3 mx-2 mt-2"></i>
            <img src={farmer} alt="" />
          </div>
        </div>

      </div>

      <div className="content chat_bot">
          <p className='text-start mb-0 text-sm'>{getCurrentDate()}</p>
          <div className="msg-container" id='msgBody'>

            <div className="wrap1">
              <div className="">
                  <div className="msgBodys">
                      <p className='mb-0 p-2'>Hello User, what questions do you have for me today? </p>
                  </div>
              </div>
            </div>
            
          </div>

          <div className="inputs">
            <div className="d-flex mt-3">
              <textarea  ref={msgInputs} onChange={msgInput} name="" id=""  placeholder='Type message.....'></textarea>
              <button onClick={sendMsg} className="btn btn-success text-white">Send message</button>
            </div>
          </div>

          <div className="chat_history">
            <div className="contents">
              <h2 className="text-muted mb-3 overflow-nowrap">Chat history</h2>
              <button className="btn text-white mt-3 btn-success">View chat</button>
            </div>
          </div>
      </div>
    </div>
    )
  }
}
