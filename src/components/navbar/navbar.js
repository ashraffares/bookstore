import React from 'react';
import './navbar.css';

const Navbar = () => (
  <header className="navcontainer">
    <nav className="nav">
      <div className="links">
        <a href="/" className="navTitle"><h1 className="h1">Bookstore CMS</h1></a>
        <a href="/" className="navTitle"><h3 className="navTitle">BOOKS</h3></a>
        <a href="/" className="navTitle"><h3 className="navTitle">CATEGORIES</h3></a>
      </div>
      <a href="/">
        <i className="far fa-user avatar" />
      </a>
    </nav>
  </header>
);

export default Navbar;
