import React from 'react';
import logo from './assets/react.svg';
import { Outlet, Navigate } from "react-router-dom";
import { NavBar } from './components/navBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Outlet />
    </div>
  );
}

export default App;