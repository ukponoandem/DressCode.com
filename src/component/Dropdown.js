//Dropdown.js
import React from 'react';
import Menuitems from './Menuitems';

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  const dropdownClass = depthLevel > 0 ? 'dropdown-submenu' : '';

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? 'show' : ''}`}>
      {submenus.map((submenu, index) => (
        <Menuitems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

export default Dropdown;