import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

// navbar
// welcome
// reservations
// menu
// events
// contact
// VIP



const Navbar = () => (

  
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Odin's Mead</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="">Welcome</a></li>
      <li><a href="#">Reservations</a></li>
      <li><a href="#">Menu</a></li>
       <li><a href="#">Events</a></li>
       <li><a href="#">Contact</a></li>
         <li><a href="#">VIP</a></li>
    </ul>
  </div>

);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar className="navbar navbar-inverse"/>
        <header className="App-header">
          //<img src={logo} className="App-logo" alt="logo" />
          //<h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
