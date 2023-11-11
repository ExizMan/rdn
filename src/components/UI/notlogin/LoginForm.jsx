import React from 'react'
import classes from './JoinLogin.module.css'

function LoginForm({children,visible,setVisible}) {
    const arrClasses = [classes.loginform];
    if (visible){
        arrClasses.push(classes.active);
        
    }
    return (
    <div className={arrClasses.join(' ')} onClick={()=>setVisible(false)}>
        <div className={classes.logincontent} onClick={(e)=>e.stopPropagation()}> {children} </div>
    </div>
  )
}

export default LoginForm