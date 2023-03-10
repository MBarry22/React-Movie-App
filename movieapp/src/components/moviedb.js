import axios from 'axios'
import API_KEY from './secret'

var moviedb = {}
moviedb.API_URL = 'https://api.themoviedb.org/3'

moviedb.popularMovies = '/discover/movie?sort_by=popularity.desc'
moviedb.top_rated = '/movie/top_rated?&language=en-US'
moviedb.upcoming = '/movie/upcoming?&language=en-US'
moviedb.now_playing = '/movie/now_playing?&language=en-US'
moviedb.movieId = '/movie/'

moviedb.API_GET = async function(path){
    const response = await axios(moviedb.API_URL + path, {
        params: {api_key: API_KEY}
    });
    console.log(response)
    return response;
}

moviedb.GET_MOVIE_DATA = async function(movieId){
    let moviesData = await moviedb.API_GET(moviedb.movieId + movieId)
    return moviesData;
}

moviedb.GET_POPULAR_MOVIES = async function(){
    let popMovies = await moviedb.API_GET(moviedb.popularMovies);
    return popMovies;
}

moviedb.GET_TOP_RATED_MOVIES = async function(){
    let top_Rated_Movies = await moviedb.API_GET(moviedb.top_rated);
    return top_Rated_Movies;
}

moviedb.GET_UPCOMING_MOVIES = async function(){
    let upcoming_Movies = await moviedb.API_GET(moviedb.upcoming);
    return upcoming_Movies;
}

moviedb.GET_NOW_PLAYING_MOVIES = async function(){
    let now_Playing_Movies = await moviedb.API_GET(moviedb.now_playing);
    return now_Playing_Movies;
}





export default moviedb;