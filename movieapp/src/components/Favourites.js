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
              <p>You have no favourite movies!</p>
            )}
        </div>

    </div>
  );
}

export default Favourites;