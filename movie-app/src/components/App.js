import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard'; 
import { addMovies } from '../actions/index';

class App extends React.Component{
  // console.log(this.props.store.getState());
  // constructor(props){
  //   super(props);
  //   this.movies = props.store.getState();
  // }

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
  render(){
    console.log("RENDER", this.props.store.getState());
    const { store } = this.props;
    const { list } = store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className = "main">
          <div className = "tabs">
            <div className = "tab">Movie</div>
            <div className = "tab">Favorites</div>
          </div>

          <div className = "list">
            {list.map((movie, index) => (
              <MovieCard movie = {movie} key = {`movies-${index}`}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
