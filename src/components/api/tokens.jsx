import axios from "axios";

let access_token = localStorage.getItem('token')
let refresh_token = localStorage.getItem('refresh_token')

const perm_axios = axios.create({
    baseURL:baseURL,
    'Content-type':'application/json',
     headers: {Authorization: localStorage.getItem('token') ? `Bearer ${accessToken}` : ""},
  });




export default 