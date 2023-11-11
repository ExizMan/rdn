import React, { useState } from 'react';
import JoinLogin from './UI/notlogin/JoinLogin';
function ProfileComp(){
    const [isLogin,setLogin]=useState(false)
    console.log(isLogin)
    if (isLogin===false)
        return(
            
        
            <article className="articles profilenonlog">
                
                <JoinLogin />
                
                
            </article>
        
            )
    else
        return(
            <article className="articles">
                
                
                
                
            </article>
            )
}
export default ProfileComp;