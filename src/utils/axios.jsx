import React from 'react'
import axios from 'axios';

export default  axios.create({
    baseURL: 'https://farmer-support-api.onrender.com/',
    // timeout: 1000,
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
});


