import { Component } from 'react';
import MoviesList from './MoviesList';
import './App.css';

const moviesData = [
  { 'hasOscars': false, 'title': 'The Shawshank Redemption', 'director': 'Frank Darabont', 'rate': '9.3', 'id': 0 },
  { 'hasOscars': true, 'title': 'The Godfather', 'director': 'Francis Ford Coppola', 'rate': '9.2', 'id': 1 },
  { 'hasOscars': true, 'title': 'The Godfather: Part II', 'director': 'Francis Ford Coppola', 'rate': '9.0', 'id': 2 },
  { 'hasOscars': true, 'title': 'The Dark Knight', 'director': 'Christopher Nolan', 'rate': '9.0', 'id': 3 },
  { 'hasOscars': false, 'title': '12 Angry Men', 'director': 'Sidney Lumet', 'rate': '8.9', 'id': 4 }
];

class App extends Component {

  state = {
    movies: moviesData
  }
  addMovie = () => {
    const newMovie = { 'hasOscars': true, 'title': 'Interstellar', 'director': 'Christopher Nolan', 'rate': '8.6', 'id': 31 };
    // add this movie to the movies array in state
    // this.state.movies.push(newMovie) -> this mutates the state - ❌
    // const moviesCopy = this.state.movies.slice();
    // moviesCopy.push(newMovie);
    // this.setState({
    //   movies: moviesCopy
    // });
    this.setState(state => {
      return {
        movies: [...state.movies, newMovie]
      }
    })
  }
  render() {
    // const moviesList = this.state.movies.map(movie => (<li>{movie.title}</li>));
    // console.log(moviesList);
    return (
      <div className="App" >
        <h1>Movies 🍿 🎬</h1>
        <button onClick={this.addMovie}>Add the movie Interstellar</button>
        <ul>
          {/* {this.state.movies.map(movie => (<li key={movie.id}>{movie.title}</li>))} */}
          {/* {moviesList} */}
          <MoviesList movies={this.state.movies} />
        </ul>
      </div>
    );
  }
}

export default App;
