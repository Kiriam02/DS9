//import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <div className='App'>
      <Header />
      <Navbar/>
      <Body/>
      <Cards/>
      <Footer/>
      </div>
      
    </>
  )
}

export default App
