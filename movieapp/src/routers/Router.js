import React, { Component } from 'react';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import About from '../components/About'
import Favourites from '../components/Favourites';
import Home from '../components/Home'
import Top_Rated_Movies from '../components/Top_Rated_Movies';
import Upcoming_Movies from '../components/Upcoming_Movies';
import Now_Playing_Movies from '../components/Now_Playing_Movies';
import MoreInfo from '../components/MoreInfo';
import { NavLink } from 'react-router-dom';
import navbar from '../styles/navbar.css';


function Routers ()  {
    return(

        <Router>
            <ul class="navlinks">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/favourites">Favourites</NavLink></li>
                <li><NavLink to="/top_rated_movies">Top Rated Movies</NavLink></li>
                <li><NavLink to="/upcoming_movies">Upcoming Movies</NavLink></li>
                <li><NavLink to="/now_playing_movies">Now Playing Movies</NavLink></li>
                
            </ul>
            <Switch>
                <Route exact path='/'><Home></Home></Route>
                <Route path='/about'><About></About></Route>
                <Route path='/favourites'><Favourites></Favourites></Route>
                <Route path='/top_rated_movies'><Top_Rated_Movies></Top_Rated_Movies></Route>
                <Route path='/upcoming_movies'><Upcoming_Movies></Upcoming_Movies></Route>
                <Route path='/now_playing_movies'><Now_Playing_Movies></Now_Playing_Movies></Route>
                <Route path='/moreinfo'><MoreInfo></MoreInfo></Route>
            </Switch>
        </Router>
    )
};
export default Routers;



