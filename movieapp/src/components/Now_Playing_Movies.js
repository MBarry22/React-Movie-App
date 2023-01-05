import moviedb from '../components/moviedb'
import React, { useState, useEffect } from 'react';
import Movie from '../components/Movie'


const  Now_Playing_Movies = () =>{
    const [movies, setMovies] = useState(null);
  useEffect(() => {
    if(!movies){
      const dofetch = async () => {
        let now_Playing_Movies = await  moviedb.GET_NOW_PLAYING_MOVIES().then();
        setMovies(now_Playing_Movies.data.results.slice(0,12))
        console.log(now_Playing_Movies.data.results)
      }
      dofetch();
    }

  });

    return(

      <div class="Home">
      <div class="movie-card-container">
          <ul class="movie-card-list">
          {movies != null && 
            movies.map((movie) => (
            <li key={movie.id}><Movie movieData= {movie} ></Movie></li>
            ))
          };
          </ul>
        </div>
      </div>
      );
      
}
export default Now_Playing_Movies;