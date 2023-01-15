import React from "react";
import '../styles/moreInfo.css'
import Null_Movie_Poster from '../styles/images/Null_Movie_Poster.jpg';
import FavouritesButton from "./FavouritesButton";
// More Info / Individual Movie Page / Popup
function MoreInfo({movieData, popUpRemove}){
    

    let RemovePopUp = ( e)=> {
        popUpRemove(null)
        return false;
    }
    
    let posterPath = "https://image.tmdb.org/t/p/original/" + movieData.poster_path
    let altText = movieData.original_title
    return(
        <div class="movie-more-info">
            <button class="more-info-button" onClick={(e) => RemovePopUp(e)}>    
            </button>
            <div class="more-info-area" >
                <div class="movie-left">
                    
                    <div className="more-info-movie-poster">
                    {movieData.poster_path == null ? (
                        <img src={Null_Movie_Poster} alt={altText}></img>
                    ) : (
                        <img src={posterPath} alt={altText}></img>
                    )}
                    </div>
                    
                    
                </div>
                    <div class="movie-right">
                    <div class="more-info-movie-title">
                        <p>{movieData.original_title}</p>
                    </div>
                    <div class="more-info-movie-overview">
                        {movieData.overview === "" ? (
                            <p>No Movie Overview Yet, Sorry!</p>
                        ) : (
                            <p>Overview:
                            <br></br> 
                            {movieData.overview}</p>
                        )}
                        
                    </div>
                    <div class="more-info-movie-popularity">
                        {movieData.vote_average === 0 ? (
                            <p>No Rating Yet, Sorry!</p>
                        ) : (
                            <p>Rating: {movieData.vote_average * 10}%</p>
                        )}
                    </div>
                    
                    <div class="more-info-movie-release-date">
                    {movieData.release_date === "" ? (
                        <p>No Movie Release Date Yet, Sorry!</p>
                    ) : (
                        <p>Release Date:
                        <br></br> 
                        {movieData.release_date}</p>
                    )}
                </div>
                </div>
            </div>
        </div>
    )
    
    
}
export default MoreInfo;