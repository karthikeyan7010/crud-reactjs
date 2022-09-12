import React from 'react';
import { Navbar } from '../../common' ;

import './Header.css';

function Header () {

  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          <a href="/" className="header-logo">CRUD</a>
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbar />
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
      <section className="header-bottom">
        <section className="header-bottom__phone">
          7010776772
        </section>
        <section className="header-bottom__email">
          karthikeyan3071997@gmail.com
        </section>
      </section>
    </section>
  )
}

export default Header;