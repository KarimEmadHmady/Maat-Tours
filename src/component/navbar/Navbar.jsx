/* import React, { useState } from 'react';
import './Navbar.css';
import { logo } from '../../assets/Image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <img src={logo} alt="" width="40px" />
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <a href="" className="A-header">Home</a>
        <a href="" className="A-header">About</a>
        <a href="" className="A-header">Services</a>
        <a href="" className="Contact">Contact</a>
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar  bar-center ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
    </header>
  );
};

export default Navbar;
 */


import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import { logo } from '../../assets/Image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <img src={logo} alt="" width="40px" />
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="A-header"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="A-header"
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          to="services"
          smooth={true}
          duration={500}
          className="A-header"
          onClick={toggleMenu}
        >
          Services
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="Contact"
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar  bar-center ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
    </header>
  );
};

export default Navbar;
