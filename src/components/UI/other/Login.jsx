import React from 'react'
import cl from './Login.module.css'

function Login() {
  return (
    <form  className={cl.login}>
        {/* <label htmlFor="">Имя пользователя</label> */}
        <input type="text" placeholder="Имя пользователя"/>
        {/* <label htmlFor="">Пароль</label> */}
        <input type="password" placeholder = "Пароль"/>

    </form>
  )
}

export default Login