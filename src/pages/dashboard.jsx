import React, { useEffect, useState } from 'react'
import Sidebar from '../components/sidebar'
import "/public/css/home.css"
import "/public/css/dashboard.css"
import logo from "/img/greenlogo.png"
import farmer from "/img/farmer.png"
import { CookiesProvider, useCookies } from "react-cookie";
import sun from "/img/sun.png"
import farmer1 from "/img/farmer1.png"
import book from "/img/book.png"
import fruits from "/img/allfruits.jpg"
import Cookies from 'js-cookie';
import axios from 'axios';
import loader from "/img/loader.gif"
import empty from "/img/emptyimg.png"

export default function Dashboard() {    
  const [cookie, setCookie] = useCookies("")
  const [produce, setProduce] = useState([])
  const [myproduce, setMyproduce] = useState([])
  const [isLoaded, setisLoaded] = useState(false)
  const [period, setPeriod] = useState("")
  const [username, setUsername] = useState("")

  if(cookie.user_token){
    const data = [
      {
        "content" : "Current state of nigeria agriculture and agricbusiness sector",
        "url" : "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.pwc.com/ng/en/assets/pdf/afcfta-agribusiness-current-state-nigeria-agriculture-sector.pdf&ved=2ahUKEwiOvLyPsNyCAxVwWEEAHXShDyAQFnoECBIQAQ&usg=AOvVaw17XijcW4kDqN3QWYH0_0Po"
      },
      {
        "content" : "Agriculture in Nigeria, statistics and facts",
        "url" : "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.statista.com/topics/6729/agriculture-in-nigeria/&ved=2ahUKEwiOvLyPsNyCAxVwWEEAHXShDyAQFnoECCUQAQ&usg=AOvVaw1Tt-4lRX41dr8G1pywUkCz"
      },
      {
        "content" : "Nigeria at a glance FAO in Nigeria",
        "url" : "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.fao.org/nigeria/fao-in-nigeria/nigeria-at-a-glance/en/&ved=2ahUKEwiOvLyPsNyCAxVwWEEAHXShDyAQFnoECBYQAQ&usg=AOvVaw1vpGLi_vhZwH0xmYBOWMtL"
      },
      {
        "content" : "Smallholder farmers contribution to food production in Nigeria",
        "url" : "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.fao.org/nigeria/fao-in-nigeria/nigeria-at-a-glance/en/&ved=2ahUKEwiOvLyPsNyCAxVwWEEAHXShDyAQFnoECBYQAQ&usg=AOvVaw1vpGLi_vhZwH0xmYBOWMtL"
      },
      {
        "content" : "Nigeria Agricultural Journal ",
        "url" : "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.ajol.info/index.php/naj&ved=2ahUKEwiOvLyPsNyCAxVwWEEAHXShDyAQFnoECCcQAQ&usg=AOvVaw1mBR6N9vCuW75LOy7e8DoP"
      },
      {
        "content" : "Agricultural in Nigeria: 7 interesting facts and statistics",
        "url" : "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://babbangona.com/agriculture-in-nigeria-7-interesting-facts-statistics/&ved=2ahUKEwiOvLyPsNyCAxVwWEEAHXShDyAQFnoECCYQAQ&usg=AOvVaw3wjkf2LTHMgJW1pdndFbT0"
      },
      {
        "content" : "The role of agriculture in the Nigerian economy",
        "url" : "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://dc.cbn.gov.ng/cgi/viewcontent.cgi%3Farticle%3D1183%26context%3Dbullion&ved=2ahUKEwiOvLyPsNyCAxVwWEEAHXShDyAQFnoECCQQAQ&usg=AOvVaw3PAmHO4UPKn1dnQkxoy9BZ"
      },
      {
        "content" : "Impact of agricultural sector on economic growth in Nigeria",
        "url" : "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://papers.ssrn.com/sol3/papers.cfm%3Fabstract_id%3D4432800&ved=2ahUKEwiOvLyPsNyCAxVwWEEAHXShDyAQFnoECCkQAQ&usg=AOvVaw3Sdf9hVnlTAv7DkWMmEyE0"
      },
      {
        "content" : "contribution of agriculture to GDP in NIgeria",
        "url" : "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.statista.com/statistics/1193506/contribution-of-agriculture-to-gdp-in-nigeria/&ved=2ahUKEwiOvLyPsNyCAxVwWEEAHXShDyAQr-IDegQITxAG&usg=AOvVaw1LdhpVJ5Z5JNucsPl5l15m"
      },
      {
        "content" : "Revamping agricultural sector and its implications on output and employment",
        "url" : "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.degruyter.com/document/doi/10.1515/opag-2022-0140/html%3Flang%3Den&ved=2ahUKEwiFkbC6t9yCAxWWYEEAHcerDeU4ChAWegQICRAB&usg=AOvVaw02keCSqKjBIPm2CDcKmVBt"
      },
    ]

    const user_data = JSON.parse(Cookies.get('user'))
    const tk = JSON.parse(Cookies.get('user_token'))
    let send = axios.create({
      baseURL: 'https://farmer-support-api.onrender.com/',
      headers: {
          "Authorization" : `Bearer ${tk.token}`,
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    });

    const str = user_data.farmerName
    const farmerName = str.substring(
      str.indexOf(" ") + 1, 
      str.lastIndexOf(";")
    );

    useEffect(() => {
      send.get("/produce",{
      })
      .then(res => {
        setisLoaded(true)
        setProduce(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })

      send.get("/produce/me",{
      })
      .then(res => {
        setisLoaded(true)
        setMyproduce(res.data.myProduces)
      })
      .catch(err => {
        console.log(err)
      })

      setUsername(farmerName)

      var time = new Date();
      var hrs = time.getHours();
      if(hrs <= 12){
        setPeriod("Good Morning")
      }else if(hrs <= 18){
        setPeriod("Good Afternoon")
      }else if(hrs >= 18){
        setPeriod("Good Evening")
      }
    },[])
    return (
      <div className='dashboard'>
        <div className="d-flex">
          <Sidebar/>

          <div className="home w-100">
            <div data-bs-toggle="offcanvas" data-bs-target=".show_sidebar">
              <i className="fa-solid fa-bars"></i>
            </div>
            <div className="header d-flex">
              <i className="fa-regular fa-bell text-muted mb-3 mx-2 mt-2"></i>
              <img  src={farmer} alt="" />
            </div>
          </div>

        </div>
        

        <div className="content overview weather">
          {isLoaded ?
              <div className="weather_content d-flex">

                  <div className="sec1">
                    <div className="d-flex img_cont">
                      <div className="text-center d-flex pfp">
                          <img src={farmer1} alt="" />
                      </div>
                      <h5 className='mx-2 username'>{period}, {username}</h5>
                    </div>
                    <div className="section">
                      <div className="temp text-center">
                        <p className="">Temperature <i className="fa-solid fa-temperature-low"></i></p>
                      </div>

                      <div className="d-flex degree">
                        <div className='outdoor'>
                          <p className="name mb-1">Outdoor</p>
                          <p className="num">80<span><i className="fa-regular fa-circle"></i></span></p>
                        </div>
                        <div className='indoor'>
                          <p className="name mb-1">Indoor</p>
                          <p className="num">90<span><i className="fa-regular fa-circle"></i></span></p>
                        </div>
                      </div>

                      <div className="humidity mt-2 text-center">
                        <p className="name mb-1">Forecast <i className="fa-solid fa-droplet"></i></p>
                      </div>

                      <div className="icons d-flex text-center">
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

                  <div className="section article">
                    <div className="d-flex see_all">
                      <p className="mb-1">Articles for you</p>
                      <a href='/articles' className="mb-1">See all</a>
                    </div>
                    <div className="article_container d-flex">

                          {data.map((val, index) => {
                        return(
                          <a href={val.url}>
                            <div className="sing_article">
                              <img src={book} alt="" />  
                              <p className="name">{val.content}</p> 
                              <p className="text-end mb-1 mt-2">read <i className="fa-solid fa-arrows-turn-right"></i></p>             
                            </div>
                          </a>
                        )
                      })}
                    </div> 
                  </div>

                  <div className="section">
                    <div className="d-flex see_all mb-3">
                      <p className="mb-1">Listing for you</p>
                      <a href='/produce-listing' className="mb-1">See all</a>
                    </div>
                    <div className="produce_listing mt-2">
                      <div className="prod_container d-flex">
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
                    </div>
                  </div>

                  <div className="section">
                    <div className="d-flex see_all mb-3">
                      <p className="mb-1">My Listing</p>
                      <a href='/my-produce' className="mb-1">See all</a>
                    </div>
                    <div className="produce_listing mt-2">
                      <div className="prod_container d-flex">
                        {myproduce.length > 0 
                        ? myproduce.map((val, index) => {
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
                        })
                        :
                        <div className="mt-5 w-100 empty text-center mb-5">
                          <img src={empty} alt="" className='mt-3' />
                          <p className="mt-2 mb-1">Empty</p>
                          <p className="mb-3">You don't have any produce!!</p>
                        </div>
                        }
                      </div> 
                    </div>
                  </div>

              </div>

            : <div className="text-center mt-5">
                <img src={loader} alt="" width={400} />
              </div>
          }
        </div>
      </div>
    )
  }else{
    window.location.href = "/login"
  }
}
