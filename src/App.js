import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LandingPage } from "./landingPage.js";
import  Layout  from "./Layout.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App(){
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
        <Route exact path="/" component = { LandingPage }/>
        <Route exact path="/app" component = { Layout }/>
      </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
