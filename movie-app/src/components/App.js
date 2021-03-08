import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard'; 
import { addMovies, addFavourite }  from '../actions/index';

class App extends React.Component{
  // console.log(this.props.store.getState());
  constructor(props){
    super(props);
    // this.movies = props.store.getState();
    this.tab = "Movie";
  }

  componentDidMount(){
    const { store } = this.props;
    store.subscribe(() => {
      console.log("UPDATED");
      this.forceUpdate();// Not recommended to use, just doing it here.
    });
    // make api call
    // dispatch action
    store.dispatch(addMovies(data));

    console.log(this.props.store.getState());
  }

  clickOnTab = (event) => {
    // console.log(this.tab + " " + event.target.innerText);
    const tabName = event.target.innerText;
    this.tab = tabName; 
    this.forceUpdate();
  }

  render(){
    console.log("RENDER",this.tab, this.props.store.getState());
    // console.log(this.state);
    const { store } = this.props;
    const { list , favourites } = store.getState().movies;
    return (
      <div className="App">
        <Navbar />
        <div className = "main">
          <div className = "tabs">
            <div className = "tab" onClick = {this.clickOnTab}>Movie</div>
            <div className = "tab" onClick = {this.clickOnTab}>Favourites</div>
          </div>

            
            {
              this.tab === "Movie" ?
              <div className = "list">
                {list.map((movie, index) => (
                  <MovieCard movie = {movie} key = {`movies-${index}`} dispatch = {store.dispatch} isFavourite = {favourites.has(movie)}/>
                ))}
              </div>
              : 
              <div className = "list">
                {[...favourites].map((movie, index) => (
                  <MovieCard movie = {movie} key = {`movies-${index}`} dispatch = {store.dispatch} isFavourite = {favourites.has(movie)}/>
                ))}
              </div>
            }
          
        </div>
      </div>
    );
  }
}

export default App;
