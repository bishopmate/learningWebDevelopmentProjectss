export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const UNFAVOURITE = "UNFAVOURITE";

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
