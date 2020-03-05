import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo192 from '../logo192.png';
const Footer = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" bsPrefix="footer">
        <Navbar.Brand href="#form">
          {/* <img
            alt=""
            src={logo192}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '} */}
          Do góry
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Footer;
