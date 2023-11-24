import React from 'react'
import axios from 'axios';
import { CookiesProvider, useCookies } from "react-cookie";
import Cookies from 'js-cookie';

var data = JSON.parse(Cookies.get('user_token'))

export default  axios.create({
    baseURL: 'https://farmer-support-api.onrender.com/',
    // timeout: 1000,
    headers: {
        "Authorization" : `Bearer ${data.token}`,
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
    // axios.defaults.headers.post['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
});


