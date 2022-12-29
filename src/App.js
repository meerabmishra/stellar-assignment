import React, { useState } from 'react';
import './App.css';
import Body from './Componenets/body/Body';
import DialogBox from './Componenets/Dialog/DialogBox';
import Footer from './Componenets/Footer/Footer';
import Header from './Componenets/Header';

function App() {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="App">
      <Header setToggle={setToggle} />


      <Body toggle={toggle} setToggle={setToggle}/>
      <Footer />
    </div>
  );
}

export default App;
