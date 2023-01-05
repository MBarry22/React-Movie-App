import moviedb from '../components/moviedb'
import React, { useState, useEffect } from 'react';
import Movie from '../components/Movie'


const  Upcoming_Movies = () =>{
    const [movies, setMovies] = useState(null);
  useEffect(() => {
    if(!movies){
      const dofetch = async () => {
        let upcoming_Movies = await  moviedb.GET_UPCOMING_MOVIES().then();
        setMovies(upcoming_Movies.data.results.slice(0,12))
        console.log(upcoming_Movies.data.results)
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
export default Upcoming_Movies;