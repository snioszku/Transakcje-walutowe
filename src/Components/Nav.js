import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo192 from '../logo192.png';

const Nav = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          {/* <img
            alt=""
            src={logo192}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '} */}
          TRANSAKCJE WALUTOWE
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Nav;
