import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/navbar.css';

function NavBar() {
    return(
  <div class="NavBar">
        <ul>
            <Router>
                <div class="navbar">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/favourites">Favourites</NavLink></li>
                    <li></li>
                </div>
            </Router>
        </ul>
    </div>
    )
};

export default NavBar;