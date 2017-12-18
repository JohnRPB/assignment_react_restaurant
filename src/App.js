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
      <li><a href="#welcome">Welcome</a></li>
      <li><a href="#reservations">Reservations</a></li>
      <li><a href="#menu">Menu</a></li>
      <li><a href="#events">Events</a></li>
      <li><a href="#contacts">Contact</a></li>
      <li><a href="#vip">VIP</a></li>
    </ul>
  </div>

);

const Section = ({id}) => (
  <Section id={id}>
    <a name={id}></a>
  </Section>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar className="navbar navbar-inverse"/>

        <Section id="Welcome" />
        <Section id="Reservations" />
        <Section id="Menu" />
        <Section id="Events" />
        <Section id="Contact" />
        <Section id="VIP" />
      </div>

    );
  }
}

export default App;
