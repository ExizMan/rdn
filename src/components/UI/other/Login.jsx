import React from 'react'
import cl from './Login.module.css'

function Login() {
  return (
    <form  className={cl.login}>
        <label htmlFor="">Имя пользователя</label>
        <input type="text"/>
        <label htmlFor="">Пароль</label>
        <input type="password"/>

    </form>
  )
}

export default Login