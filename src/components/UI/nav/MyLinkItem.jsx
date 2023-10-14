import React from 'react'
import classes from './MyLinkItem.module.css'
function MyLinkItem({tittle}) {
  return (
    <li className={classes.nav_item}>{tittle}</li>
  )
}

export default MyLinkItem