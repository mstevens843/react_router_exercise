// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'; 
import VendingMachine from './components/VendingMachine'; 
import Soda from './components/Soda'; 
import Chips from './components/Chips'; 
import Candy from './components/Candy'; 

// NavBar component:
function NavBar() {
  return (
    <nav>
      <NavLink exact to="/" activeClassName="active">Vending Machine</NavLink>
      <NavLink to="/soda" activeClassName="active">Soda</NavLink>
      <NavLink to="/chips" activeClassName="active">Chips</NavLink>
      <NavLink to="/candy" activeClassName="active">Candy</NavLink>
    </nav>
  );
}

// Updated App.js
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/soda" element={<Soda />} />
        <Route path="/chips" element={<Chips />} />
        <Route path="/candy" element={<Candy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
