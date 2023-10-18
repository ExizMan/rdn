import React from 'react'
import classes from './MyLinkItem.module.css'
import { Link } from 'react-router-dom'


function MyLinkItem({tittle, rf}) {
  return (
    <li className={classes.nav_item}><Link className='ssilka' to={rf}>{tittle} </Link></li>
  )
}

export default MyLinkItem
//{id:2,tittle:'Нейросеть',rf:'neuro'},{id:3,tittle:'Поддержка',rf:'help'}