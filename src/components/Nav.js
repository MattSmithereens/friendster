import React, { Component } from 'react';
import "./Nav.css";


const Nav = () => {
  return (<div className="Nav">
  <div class="nav-but">
  <button>Home</button>
  <button>Notifations</button>
  <button>Message</button>
&nbsp;&nbsp;&nbsp;&nbsp;
  <input align="right" class="search" type="text" name="lastname" value="search"/>
  </div>
  </div>);
};

export default Nav;

