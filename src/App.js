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
 <nav role="navigation" class="navbar navbar-default navbar-inverse">
  <div class="container-fluid navbar-inverse">
    <div class="navbar-header navbar-inverse">
      <a class="navbar-brand" href="#">Odin's Mead</a>
    </div>
     <ul class="nav navbar-nav navbar-inverse">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#Welcome">Welcome</a></li>
      <li><a href="#Reservations">Reservations</a></li>
      <li><a href="#Menu">Menu</a></li>
      <li><a href="#Events">Events</a></li>
      <li><a href="#Contacts">Contact</a></li>
      <li><a href="#VIP">VIP</a></li>
    </ul>  
  </div>
</nav> 
);

const Section = ({id, child}) => (
  <section id={id}>
    <a name={id}></a>
    <h1>{id}</h1>
    {child}
  </section>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar className="navbar navbar-inverse"/>
        <div id="banner">
          <img src="https://cdn.images.express.co.uk/img/dynamic/1/590x/secondary/Beer-price-UK-pubs-goes-up-6p-pint-801398.jpg" className="img-responsive"/>
        </div>
        <Section id="Welcome" />
        <Section id="Reservations" />
        <Section id="Menu" />
        <Section id="Events" />
        <Section id="Contacts" />
        <Section id="VIP" />
      </div>

    );
  }
}

export default App;
