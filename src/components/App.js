import React, { Component } from 'react';
import Nav from "./Nav";
import Bio from "./Bio";
import Snap from "./Snap";
import Feed from "./Feed";
import Friends from "./Friends";

const App = () => {
  return (<div className="App">
  <Nav />
  <Bio />
  <Snap />
  <Feed />
  <Friends />
  </div>);
};

export default App;
