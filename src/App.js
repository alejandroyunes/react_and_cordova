import React from 'react';

import './App.css';

import { Route, Switch } from "react-router-dom";

import NavBar from './components/NavBar';

import Home from './components/Home';
import SecondPage from './components/SecondPage';

function App() {
  return (
    <>

      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/SecondPage" component={SecondPage} />
  
        <Route component={Error} />

      </Switch>
      

    </>
  );
}

export default App;
