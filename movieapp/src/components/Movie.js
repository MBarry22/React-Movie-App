import '../styles/movieCard.css';
import FavouritesButton from './FavouritesButton';
import MoreInfo from './MoreInfo';
import Null_Movie_Poster from '../styles/images/Null_Movie_Poster.jpg';
import React, { useState, useEffect } from 'react';
export default function Movie({ movieData }){
    const [moviePopUp, setMoviePopUp] = useState(null);


   let posterPath = "https://image.tmdb.org/t/p/original/" + movieData.poster_path
   let altText = movieData.original_title
   
   let OpenMoviePopUp = (movieData, e)=> {
    setMoviePopUp(<MoreInfo movieData={movieData} popUpRemove={setMoviePopUp}></MoreInfo>)
    return false;
}
    return(
        <div class="movies">
            {moviePopUp}
                <div class="movie-left">
                    <div class="movie-poster">
                    <button class="poster-button" onClick={(e) => OpenMoviePopUp(movieData, e)}>
                     {movieData.poster_path == null ? (
                        <img src={Null_Movie_Poster} alt={altText}></img>
                    ) : (
                        <img src={posterPath} alt={altText}></img>
                    )}
                    </button>
                        
                    </div>
                    
                        <FavouritesButton movieId={movieData.id}/>
                </div>
                <div class="movie-right">
                    <div class="movie-title">
                        <p>{movieData.original_title}</p>
                    </div>
                    <div class="movie-popularity">
                    {movieData.vote_average === 0 ? (
                        <p>No Rating Yet, Sorry!</p>
                    ) : (
                        <p>{movieData.vote_average * 10}%</p>
                    )}
                        
                    </div>
                    <div class="movie-overview">
                    {movieData.overview === "" ? (
                        <p>No Movie Overview Yet, Sorry!</p>
                    ) : (
                        <p>{movieData.overview}</p>
                    )}
                        
                    </div>
                    <div class="movie-release-date">
                    {movieData.release_date === "" ? (
                        <p>No Movie Release Date Yet, Sorry!</p>
                    ) : (
                        <p>{movieData.release_date}</p>
                    )}
                        
                    </div>
                    
            </div>
        </div>

 
            

    )
}