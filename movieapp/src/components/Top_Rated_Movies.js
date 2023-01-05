import moviedb from '../components/moviedb'
import React, { useState, useEffect } from 'react';
import Movie from '../components/Movie'


const  Top_Rated_Movies = () =>{
    const [movies, setMovies] = useState(null);
  useEffect(() => {
    if(!movies){
      const dofetch = async () => {
        let top_Rated_Movies = await  moviedb.GET_TOP_RATED_MOVIES().then();
        setMovies(top_Rated_Movies.data.results.slice(0,12))
        console.log(top_Rated_Movies.data.results)
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
export default Top_Rated_Movies;