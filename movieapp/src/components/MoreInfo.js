import React from "react";
import '../styles/moreInfo.css'

function MoreInfo({movieData, popUpRemove}){
    

    let RemovePopUp = ( e)=> {
        popUpRemove(null)
        return false;
    }
    let backdropStyle = {
        backgroundImage: "url(https://image.tmdb.org/t/p/original/" + movieData.backdrop_path + ")"
    }
    return(
        <div class="movie-more-info">
            <button class="more-info-button" onClick={(e) => RemovePopUp(e)}>    
            </button>
            <div class="more-info-area" style={backdropStyle}>
                
                <div class="more-info-movie-title">
                        <p>{movieData.original_title}</p>
                        </div>
                        <div class="more-info-movie-popularity">
                        {movieData.vote_average === 0 ? (
                            <p>No Rating Yet, Sorry!</p>
                        ) : (
                            <p>Rating: {movieData.vote_average * 10}%</p>
                        )}
                            
                        </div>
                        <div class="more-info-movie-overview">
                        {movieData.overview === "" ? (
                            <p>No Movie Overview Yet, Sorry!</p>
                        ) : (
                            <p>{movieData.overview}</p>
                        )}
                            
                        </div>
                        <div class="more-info-movie-release-date">
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
export default MoreInfo;