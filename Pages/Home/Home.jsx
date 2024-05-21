import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
//import App from './App.jsx'
//import Home from './components/Pages/Home/Home.jsx'
//import Products from'./components/Products/Products.jsx'
//import './index.css'

import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Header />
      <Navbar/>
      <Body/>
      <Cards/>
      <Footer/>
  </React.StrictMode>,
)
