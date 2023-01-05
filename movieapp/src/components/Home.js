import moviedb from '../components/moviedb'
import React, { useState, useEffect } from 'react';
import Movie from '../components/Movie'
import Header from '../components/Header'
import MoreInfo from './MoreInfo';

const  Home = () =>{
    const [movies, setMovies] = useState(null);
  useEffect(() => {
    if(!movies){
      const dofetch = async () => {
        let popmovies = await  moviedb.GET_POPULAR_MOVIES().then();
        setMovies(popmovies.data.results.slice(0,12))
        console.log(popmovies.data.results)
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
export default Home;