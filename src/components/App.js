import React, { Component } from 'react';
import Nav from "./Nav";
import Bio from "./Bio";
import Snap from "./Snap";
import Feed from "./Feed";
import Friends from "./Friends";

const App = () => {
  return (<div className="App">
      <Nav />
    <div id="left-col">
      <Bio />
      <Snap />
    </div>
    <div id="center-col">
      <Feed />
    </div>
    <div id="right-col">
      <Friends />
    </div>
  </div>);
};

export default App;
