import React from 'react'
import axios from 'axios';
import { CookiesProvider, useCookies } from "react-cookie";
import Cookies from 'js-cookie';

if(Cookies.get('user_token')){
    var data = JSON.parse(Cookies.get('user_token'))
}


export default  axios.create({
    baseURL: 'https://farmer-support-api.onrender.com/',
    // timeout: 1000,
    headers: {
        "Authorization" : `Bearer ${data.token}`,
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
});


