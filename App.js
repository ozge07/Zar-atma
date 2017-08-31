import React, { Component } from 'react';
import './App.css';
import defaultRolling from './img/d.jpg';

class App extends Component {
  render() {
    function zarSalla(){
      var result = Math.floor(Math.random() *6)+1;
      console.log(result);
      document.getElementById("sonucText").innerHTML=result + " attınız";
      document.getElementById("zarResimId").setAttribute("src",require('./img/' + result + '.jpg'));


    }
    return (
      <div className="App">

      <p align="center"><img id="zarResimId" className="zarResim" src={defaultRolling} /></p>
      <h2 id="sonucText"align="center">Henüz zar atmadınız</h2>
      <button onClick= {zarSalla}>ZAR SALLA</button>
      </div>
    );
  }
}

export default App;
