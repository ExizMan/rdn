//import logo from './logo.svg';
//import './App.css';
import './css/Normalize.css'
import './css/Header.css'
import './css/Footer.css'
import'./css/Root.css'

import './css/Root.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

import React from 'react'
import Header from "./components/Header"
import Body from './components/Body'
import Footer from './components/Footer'
import ProfileComp from './components/ProfileComp'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='' element={<Body/>} />
        
      
      <Route path='/profile' element={<ProfileComp/>} />
        
      </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
