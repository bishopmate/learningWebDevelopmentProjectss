import { bindActionCreators, combineReducers } from "redux";

import { ADD_MOVIES , ADD_FAVOURITE, UNFAVOURITE} from '../actions/index';

const initialMovieState = {
  list : [],
  favourites : new Set(),

}

export function movies(state = initialMovieState, action){
  console.log("Hi");
  switch(action.type){
    case ADD_MOVIES : 
    return {
      ...state,
      list : action.movies
    }
    case ADD_FAVOURITE :
      return {
        ...state,
        favourites : state.favourites.add(action.movie)
      }
    case UNFAVOURITE : 
      let newSet = new Set(state.favourites);
      newSet.delete(action.movie);
      return {
        ...state,
        favourites : newSet
      }
    default : return state;
  }

}
      
      
const initialSearchState = {
  result : []
}

export function search(state = initialSearchState, action){
  console.log("Hello");
  return state;
}

// const initialRootState = {
//   movies : initialMovieState,
//   search : initialSearchState
// }

// export default function rootReducer(state = initialRootState, action){
//   return {
//     movies : movies(state.movies, action),
//     search : search(state.search, action)
//   }
// }

export default combineReducers({
  movies,
  search
});