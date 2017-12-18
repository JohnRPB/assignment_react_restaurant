import React, {Component} from 'react';
import faker from 'faker';

const menuItems = [0,0,0,0].map((el) => {
  return {
    name: faker.commerce.productName(),
    description: faker.lorem.sentence(),
    price: faker.commerce.price(),
  };
});

const MenuItem = ({menuItem}) => {
  return (
    <div className="menuItem">
      <h4>{menuItem.name}</h4>
      <p>{menuItem.description}</p>
      <h5>{menuItem.price}</h5>
    </div>
  );
};

class Menu extends Component {
  render() {
    console.log(menuItems);
    return <div id="menu">
      {
        menuItems.map(menuItem => {
        return <MenuItem menuItem={menuItem} />
      })}
    </div>
  }
}

export default Menu;
