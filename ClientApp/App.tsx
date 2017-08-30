import * as React from 'react';
import Header from './components/Header';
import FilterBox from './components/FilterBox';
import MovieList from './components/MovieList';
import AddMovieBox from './components/AddMovieBox';
import Footer from './components/Footer';
import IMovie from './models/IMovie';
import { getMovies } from './services/movieService';

interface IAppState {
  isLoading: boolean;
  movies: IMovie[];
  filterText: string;
  addMovieText: string;
  errorText: string | null;
}


class App extends React.Component<{}, IAppState> {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      addMovieText: "",
      errorText: null,
      movies: [],
      filterText: ""
    };
  }

  componentDidMount() {
    this.setState({
      movies: getMovies()
    });
  }


  toggleWatchedMovieCallback = (movieId: number) => {
    this.setState(prevState => {
      let newListOfMovies = prevState.movies.map(m => {
        if (m.id !== movieId) {
          return m;
        }
        return { ...m, isWatched: !m.isWatched };
      });
      return {
        movies: newListOfMovies
      }
    });
  }

  render() {
    return (
      <div className="container">
        {this.state.isLoading && <div>Loading...</div>}
        <Header text="Movies" />
        <FilterBox />
        <MovieList movies={this.state.movies}
          toggleWatchedMovieCallback={this.toggleWatchedMovieCallback} />
        <AddMovieBox />
        <Footer text="Kulendayz" />
      </div>
    );
  }
}

export default App;
