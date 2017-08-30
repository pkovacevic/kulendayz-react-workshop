import * as React from 'react';
import Header from './components/Header';
import FilterBox from './components/FilterBox';
import MovieList from './components/MovieList';
import AddMovieBox from './components/AddMovieBox';
import Footer from './components/Footer';
import {getMovies} from './services/movieService';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="container">
        <Header text="Movies" />
        <FilterBox />
        <MovieList movies={getMovies()} />
        <AddMovieBox />
        <Footer text="Kulendayz" />
      </div>
    );
  }
}

export default App;
