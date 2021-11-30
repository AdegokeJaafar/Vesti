import React from 'react'
import './App.css';
import Create from './Create/Create';
import DoMore from './DoMore/doMore';
import Footer from './Footer/Footer';
import Header from "./Header/Header"
import Offer from './Offer/Offer';
import Order from "./Order/Order"
import Safety from './Safety/Safety';
import Text from "./Text/text"
import Vesti from './Vesti/Vesti';

function App() {
  return (
    <div className="App">
      <Header/>
      <Order/>
      <Text/>
      <Vesti/>
      <Offer/>
      <DoMore/>
      <Create/>
      <Safety/>
      <Footer/>
    </div>
  );
}

export default App;
