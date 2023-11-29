import axios from "axios";

let accessToken = localStorage.getItem('token')
let refreshToken = localStorage.getItem('refresh_token')

const perm_axios = axios.create({
    baseURL:baseURL,
    'Content-type':'application/json',
     headers: {Authorization: localStorage.getItem('token') ? `Bearer ${accessToken}` : ""},
  });




export default perm_axios