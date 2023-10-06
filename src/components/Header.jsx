import React, { useState } from 'react';
import {ReactComponent as Logo} from './logo/logo.svg';

function Header(){
    //const [count,setCount]=useState(0)

        return(
        <header className="header_outer"> 
            <div className="header_inner responsive_wrapper">
                <div className="logo">
                    <Logo/></div>
                 <nav className="links">
                    <ul className="nav_list">
                        <li className="nav_item">Меню</li>
                        <li className="nav_item">Нейросеть</li>
                        <li className="nav_item">Поддержка</li>
                        <li className="nav_item">Профиль</li>
                    </ul>
                 </nav>


            </div>
        </header>
            )
}
export default Header;