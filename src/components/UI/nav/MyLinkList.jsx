import React, { useState } from 'react'
import classes from './MyLinkList.module.css'
import MyLinkItem from './MyLinkItem'
function MyLinkList() {
    const [links,setLinks]=useState(
        [
            {id:1,tittle:'Меню'},{id:2,tittle:'Нейросеть'},{id:3,tittle:'Поддержка'},{id:4,tittle:'Профиль'}
        ]
    )
  return (
    <ul className={classes.nav_list}>
        {links.map(link=> 
            <MyLinkItem tittle={link.tittle} key={link.id}/>)}
    </ul>
  )
}

export default MyLinkList