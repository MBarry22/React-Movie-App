
import React from 'react';


import './App.css';
import './styles/movieCard.css';
import './styles/header.css';
import './styles/navbar.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Routers from './routers/Router';


function App(){
  return (
    
    <div className="App">
      
      <Header></Header>
      <Routers></Routers>
      <Footer></Footer>
    </div>
      
    
  );

}

export default App;
