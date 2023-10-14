import React from 'react'
import st from './MenyButton.module.css'
function MenyButton({isActive, onClick}) {
  return (
    <button className={st.mbutton} onClick={()=>onClick()}> 
      <div className = {st.spnitem}></div>
      <div className = {st.spnitem}></div>
      <div className = {st.spnitem}></div>
     </button>
  )
}

export default MenyButton