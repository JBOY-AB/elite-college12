import React, { useState } from 'react';

const Header = () => {
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavVisible(!isMobileNavVisible);
    document.body.classList.toggle('no-scroll', !isMobileNavVisible);
  };

  return (
    <div>
      <nav>
        <div className="logo-container">
          <img className="imgl" src="/image/POST UTME TUTORIALS 2-1.png" alt="Logo" />
          <div
            className="menu-icon"
            id="menu-icon"
            onClick={toggleMobileNav}
          >
            {isMobileNavVisible ? '✖' : '☰'}
          </div>
          {/* Hamburger icon or Cancel icon */}
        </div>
        <ul className="desktop-menu">
          <li>
            <a href="#home" className="home-link active">
              Home
            </a>
          </li>
          <li>
            <a href="#aboutus">About Us</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#Fee">Fees</a>
          </li>
        </ul>
        <button className="btn">
          <a href="#contact" className="btn-link">
            <span className="btn-text-one">For more info</span>
            <span className="btn-text-two">Contact Us!</span>
          </a>
        </button>
        {/* Mobile popup menu */}
        <div
          className={`mobile-nav ${isMobileNavVisible ? 'visible' : ''}`}
          id="mobile-nav"
        >
          <ul>
            <li>
              <a href="#home" className="home-link active">
                Home
              </a>
            </li>
            <li>
              <a href="#aboutus">About Us</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#Fee">Fees</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;