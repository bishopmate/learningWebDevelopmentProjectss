import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard'; 

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
      this.forceUpdate();
    });
    // make api call
    // dispatch action
    store.dispatch({
      type : 'ADD_MOVIES',
      movies : data 
    });

    console.log(this.props.store.getState());
  }
  render(){
    console.log("RENDER");
    const { store } = this.props;
    const movies = store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className = "main">
          <div className = "tabs">
            <div className = "tab">Movie</div>
            <div className = "tab">Favorites</div>
          </div>

          <div className = "list">
            {movies.map((movie, index) => (
              <MovieCard movie = {movie} key = {`movies-${index}`}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
