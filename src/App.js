import React from 'react'
import './App.css';
import Header from "./Header/Header"
import Offer from './Offer/Offer';
import Order from "./Order/Order"
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
    </div>
  );
}

export default App;
