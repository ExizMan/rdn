//import logo from './logo.svg';
//import './App.css';
import '../css/Normalize.css'
import '../css/Header.css'
import '../css/Footer.css'
import'../css/Root.css'

import React from 'react'
import Header from "../components/Header"
import Body from '../components/Body'
import Footer from '../components/Footer'
function Main() {
  return (
    <div className="Main">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default Main;
