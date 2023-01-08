import React from 'react';
import '../styles/About.css';
import MPMovies from '../styles/images/MPMovies.png';
import tmbd from '../styles/images/tmbd.svg'
function About() {

    return (
      <div class="About-Wrapper">
        <div class="About">
            <h2>About MP-Movies</h2>
            <div class="About-text">
              <p>MP-Movies is a movie database app that sorts through popular, top-rated, now-playing and upcoming movies. Take a look through the list of movies in our homepage and
                add you're favourites to you're favourites list!. 
              </p>
              <p>This website was built using the React language as part of the React class in BCIT's SSD course by <a class='mason-porter-link' target="_blank" href='https://www.instagram.com/_masonporter_/?hl=en'>Mason Porter</a></p>
              <div class="TMDB-text">
                <p>This product uses the <a class="TMDB-Gradient" target="_blank" href='https://www.themoviedb.org/'>TMDb API</a> but is not endorsed or certified by <a class="TMDB-Gradient" target="_blank" href='https://www.themoviedb.org/'>TMDb.</a></p>
              </div>
              <div class="TMDB-Logo">
                <img src={tmbd} alt="TMBD logo" height="50"></img>
            </div>
            </div>
          </div>
      </div>
      
    );
  
  
}

export default About;