import React from 'react'
import MyLinkItem from './MyLinkItem'
import MyLinkList from './MyLinkList'
import classes from './MyLink.module.css'
function MyLink({isOpen}) {
  
console.log(isOpen)

  return (
    <nav className={isOpen==true? classes.links+' '+classes.active:classes.links}>
                    <MyLinkList/>
                 </nav>
  )
}

export default MyLink