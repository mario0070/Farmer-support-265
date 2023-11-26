import React, { useEffect, useRef } from 'react'
import Sidebar from '../components/sidebar'
import "/public/css/home.css"
import "/public/css/article.css"
import farmer from "/img/farmer.png"
import logo from "/img/greenlogo.png"
import book1 from "/img/book1.png"
import book from "/img/book.png"
import { CookiesProvider, useCookies, } from "react-cookie";

export default function Articles() {
  const [cookie, setCookie, removeCookie] = useCookies("")

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
              <i className="fa-regular fa-bell text-muted mb-3 mx-2 mt-2"></i>
              <img src={farmer} alt="" />
              </div>
          </div>

          </div>

          

          <div className="content article mt-2">
            <div className="article_container d-flex">

              {data.map((val, index) => {
                return(
                  <a href={val.url}>
                    <div className="sing_article">
                      <img src={book1} alt="" />  
                     <div className="p-2">
                     <p className="name">{val.content}</p> 
                      <p className="text-end mb-1 mt-2">read <i className="fa-solid fa-arrows-turn-right"></i></p> </div>            
                    </div>
                  </a>
                )
              })}


            </div> 
          </div>
      </div>
    )
  }
}
