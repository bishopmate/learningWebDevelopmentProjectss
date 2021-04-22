export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const UNFAVOURITE = "UNFAVOURITE";
// not recommended in a production code, in that case fetch API key from backend only
const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;
// Action Creators
export function addMovies(movies){
  return {
    type : ADD_MOVIES,
    movies
  }
}

export function addFavourite(movie){
  return {
    type : ADD_FAVOURITE,
    movie
  }
}

export function unFavourite(movie){
  return {
    type : UNFAVOURITE,
    movie
  }
}

export function handleMovieSearch(movie){
  const url = `http://www.omdbapi.com/?t=${movie}&apikey=${OMDB_API_KEY}`;
  return function(dispatch){
    fetch(url)
    .then(response => response.json())
    .then(movie => {
      console.log("movie ", movie);
    })
  }


  
}