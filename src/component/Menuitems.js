import React, { useState,useEffect,useRef } from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"

const Menuitems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  const menuRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault(); // Prevent default action if there's a submenu
    setDropdown(!dropdown);
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <li className={`menu-item ${dropdown ? 'active' : ''}`}>
      <Link to={items.url} onClick={items.submenu ? handleClick : undefined}>
        {items.title}
      </Link>
      {items.submenu && (
        <Dropdown submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel + 1} />
      )}
    </li>
  );
}
export default Menuitems;