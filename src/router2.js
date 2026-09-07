import React from 'react';
import { BrowserRouter, NavLink } from 'react-router';
import './navlink.css';

function Router2() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <NavLink 
          to="/"
          end
          className={({ isActive }) => isActive ? "active_menu" : "menu"} 
          style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}
        >
          Home
        </NavLink>
        
        <NavLink 
          to="/products" 
          className={({ isActive }) => isActive ? "active_menu" : "menu"}
          style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}
        >
          Products
        </NavLink>
      </nav>
    </BrowserRouter>
  );
}

export default Router2;
