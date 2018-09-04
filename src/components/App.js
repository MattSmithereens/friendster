import React, { Component } from 'react';
import Nav from "./Nav";
import Bio from "./Bio";
import Snap from "./Snap";
import Feed from "./Feed";
import Friends from "./Friends";
import "./App.css";

const App = () => {
  return (<div className="container" className="App">
      <Nav />
      <div id="main">
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
    </div>
  </div>);
};

export default App;
