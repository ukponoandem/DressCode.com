//Header.js
import React from 'react';
import { menuitemsData } from '../menuitemsData';
import Menuitems from './Menuitems';

const Header = () => {
  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {menuitemsData.map((menu, index) => (
          <Menuitems items={menu} key={index} depthLevel={0} />
        ))}
      </ul>
    </nav>
  );
};

export default Header;