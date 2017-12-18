import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Nav';
import Section from './Section';
import Welcome from './Welcome';

// navbar
// welcome
// reservations
// menu
// events
// contact
// VIP

const sections = [
  {
    title: 'Welcome',
    content: <Welcome />
  },
  {
    title: 'Reservations',
  },
  {
    title: 'Menu',
  },
  {
    title: 'Events',
  },
  {
    title: 'Contacts',
  },
  {
    title: 'VIP',
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar sections={sections} colorStyle="navbar-inverse" />
        <div className="container">
          <div className="jumbotron">
            <img
              src="https://cdn.images.express.co.uk/img/dynamic/1/590x/secondary/Beer-price-UK-pubs-goes-up-6p-pint-801398.jpg"
              className="img-responsive"
            />
          </div>
        </div>
        {sections.map(section => {
          return <Section id={section.title} child={section.content}/>;
        })}
      </div>
    );
  }
}

export default App;
