import React from 'react';
import { useState, useEffect } from 'react'
import Movie from './Movie';
import moviedb from '../components/moviedb'

import '../styles/favourites.css';





function Favourites () {
  const [moviesData, setmoviesData] = useState(null);
  useEffect(() => {
    if(moviesData == null){
      let currMovies = JSON.parse(localStorage.getItem('movies'))
      
      if(currMovies != null ){
        let favMovies = []
          Object.keys(currMovies).forEach(function(key, index){
          if(currMovies[key]){
            favMovies.push(key)
          }
        })
        
        let movieData = []

        const dofetch = async () => {
          for(let i = 0; i < favMovies.length; i++){
            let fetchFavMovies = await moviedb.GET_MOVIE_DATA(favMovies[i]);
            movieData.push(fetchFavMovies.data)
          }
          setmoviesData(movieData)
        }
        dofetch();

        
      }
    } 
  });
  
  
  

  return (
    <div class="Favourites-Wrapper">
      <div class="Fav-Header">
        <h1>Favourites</h1>
      </div>
      <div class="Fav-Movie-">
        
          {(moviesData != null && moviesData.length > 0) ? (
            <ul class="movie-card-list">
            {
              moviesData.map(function(movie, i){
                return(<li key={movie.id}><Movie movieData= {movie} ></Movie></li>)

              })
            }
            </ul>
            ) : (
              <p id="no-movies">You currently have no favourite movies!
                <br></br> 
                Go select some of your favourite movies from: 
                <br></br>
                <a class='now-playing-link' href='http://localhost:3000'>Popular Movies</a> | <a class='upcoming-link' href='http://localhost:3000/top_rated_movies'>Top Rated Movies</a>
                <br></br>
                <a class='upcoming-link' href='http://localhost:3000/upcoming_movies'>Upcoming Movies</a> | <a class='now-playing-link' href='http://localhost:3000/now_playing_movies'>Now Playing Movies</a> 
              </p>
              
            )}
        </div>

    </div>
  );
}

export default Favourites;