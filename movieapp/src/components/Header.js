import MPMovies from '../styles/images/MPMovies.png';
import '../styles/header.css';





import React from 'react'

 const Header = () =>{
    return(
        <div class="Header">
           
             <img class="logo" src={MPMovies} alt="MP Movies Logo"></img>

        </div>
    )

}
export default Header;