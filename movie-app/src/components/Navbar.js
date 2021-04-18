import React from 'react';
import { data } from '../data';
import { addMovies, handleMovieSearch } from '../actions';


class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showSearchResults : false
    }
  }

  handleAddToMovies = (movie) => {
    this.props.dispatch(addMovies(movie));
    this.setState = {
      showSearchResults : false,
      searchText : ''
    }
  }
  
  handleSearch = () => {
    const { searchText } = this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  }

  handleChange = (e) => {
    this.setState({
      searchText : e.target.value
    })
  }

  render(){
    const { showSearchResults } = this.state;
    return (
      <div className = "nav">
        <div className = "search-container">
          <input onChange = {this.handleChange}/>
          <button id = "search-btn" onClick = {this.handleSearch}>Search</button>

          {
            showSearchResults && 
              <div className = "search-results">
                <div className = "search-result">
                  <img src={data[0].Poster} alt="search-pic"/>

                </div>
              </div>
          }
        </div>  
      </div>
    );
  }
}

export default Navbar;
