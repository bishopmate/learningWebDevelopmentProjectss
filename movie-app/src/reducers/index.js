import { bindActionCreators } from "redux";
import { ADD_MOVIES , ADD_FAVOURITE, UNFAVOURITE} from '../actions/index';

const initialState = {
  list : [],
  favourites : new Set(),

}

export default function movies(state = initialState, action){
  // if(action.type === ADD_MOVIES){
  //   return {
  //     ...state,
  //     list : action.movies
  //   }
  // }
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