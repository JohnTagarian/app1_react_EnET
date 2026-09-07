import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router';
import Products from './products';
import Home from './home';
import Member from './member';

import './navlink.css';

function Router3() {
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
          style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>
            
          Products
        </NavLink>

        <NavLink 
          to="/member" 
          className={({ isActive }) => isActive ? "active_menu" : "menu"}
          style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>
            
          Member
        </NavLink>

        <NavLink 
            to='/contact' 
            className={({ isActive }) => isActive ? "active_menu" : "menu"}
            style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>

            Contact Us
        </NavLink>
      </nav>


      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/member" element={<Member />} />
        <Route path="/contact" element={<div style={{textAlign:'center'}}>Contact Page</div>} />
        <Route path="/*" element={<div style={{textAlign:'center'}}>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router3;
