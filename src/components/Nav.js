import React, { Component } from 'react';
import "./Nav.css";


const Nav = () => {
  return (<div className="Nav">
  <div class="nav-but">
  <button>Home</button>
  <button>Notifations</button>
  <button>Message</button>
  </div>
  <div>
  <input className="search" type="text" value="search"/>
  <input className="search" type="text" value="tweet"/>
  </div>
  </div>);
};

export default Nav;

