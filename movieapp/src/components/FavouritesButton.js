import { useState, useEffect } from 'react'
import star from '../styles/images/star.png';
import emptyStar from '../styles/images/emptyStar.png';


export default function FavouritesButton(props) {
    const [isFavourites, setIsFavourites] = useState(null);

        useEffect(() => {
            if(isFavourites == null){
            let currMovies = JSON.parse(localStorage.getItem('movies'))
            
            
            if (currMovies && currMovies[props.movieId.toString()]) {
                setIsFavourites(true)

            }
            else{
                setIsFavourites(false)

            }
        }})
    function AddFavouriteMovie(e){
        e.preventDefault()
        let currMovies = localStorage.getItem('movies')

        
        if(currMovies == null){
            currMovies = {}
        }
        else{
            currMovies = JSON.parse(currMovies)


        }
        currMovies[props.movieId.toString()] = true
        console.log(currMovies)
        localStorage.setItem('movies', JSON.stringify(currMovies))
        setIsFavourites(true)
    }
    function RemoveFavouriteButton(){
        let currMovies = JSON.parse(localStorage.getItem('movies'))
        
        currMovies[props.movieId.toString()] = false
        console.log(currMovies)
        localStorage.setItem('movies', JSON.stringify(currMovies))
        setIsFavourites(false)

    }
    return(
        <div class="add-to-favourites">
            {isFavourites ? (
                <button onClick={RemoveFavouriteButton} class="Fav-Button"><img src={star} class="favbutton-image" alt="Filled Star Favourite Button (Remove)"></img></button>
        ) : (
            <button onClick={AddFavouriteMovie} class="Fav-Button"><img src={emptyStar} class="favbutton-image" alt="Empty Star Favourite Button"></img></button>
        )}
        

        
        </div>
       
    )
}
