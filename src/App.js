import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import './Nav';

// navbar
// welcome
// reservations
// menu
// events
// contact
// VIP

const sections = ['Welcome', 'Reservations', 'Menu', 'Events', 'Contacts', 'VIP']




const Section = ({id}) => (
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
