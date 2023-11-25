import React, { useRef, useState } from 'react'
import Sidebar from '../components/sidebar'
import "/public/css/home.css"
import "/public/css/chat-bot.css"
import farmer from "/img/farmer.png"
import typing from "/img/typing1.gif"
import $ from 'jquery';
import {getCurrentDate} from './../components/date'
import { CookiesProvider, useCookies } from "react-cookie";
import Cookies from 'js-cookie';
import axios from 'axios';


export default function ChatBot() {
  const [msg, setMSg] = useState("")
  const [cookie, setCookie, removeCookie] = useCookies("")
  const msgInputs = useRef("")
  const [AIresponse, setAIresponse] = useState(false)

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

  const postMsg = (id, msg) => {
    setAIresponse(true)
    $(".msg-container").scrollTop($(".msg-container").height()*200);
    send.post("/assistant",{
      "chatId": "", 
      "title": "", 
      "message": [
          {
              "role": "user", 
              "content": msg 
          }
      ]
    }).then(res => {
      setAIresponse(false)
      console.log(res, res.data.conversation.chats[1].content)
      AImsg(res.data.conversation.chats[1].content)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const AImsg = (msg) => {
    $(".msg-container").append(`
      <div class="wrap1">
      <div class="">
          <div class="msgBodys">
              <p class='mb-0 p-2'>${msg}</p>
          </div>
      </div>
    </div>`)
    $(".msg-container").scrollTop($(".msg-container").height()*200);
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
      $(".msg-container").scrollTop($(".msg-container").height()*200);
      postMsg("",msgInputs.current.value)
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

            { AIresponse &&
              <div className="wrap1 ai">
                <div className="mx-4 mt-2">
                  <img src={typing} alt="" className='typing' />
                </div>
              </div>
            }
            
          </div>

          <div className="inputs">
            <div className="d-flex mt-3">
              <textarea  ref={msgInputs} onChange={msgInput} name="" id=""  placeholder='Type message.....'></textarea>
              <button onClick={sendMsg} className="btn send_msg btn-success text-white">Send message</button>
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
