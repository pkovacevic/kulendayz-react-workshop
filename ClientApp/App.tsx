import * as React from 'react';
import Header from './components/Header';
import FilterBox from './components/FilterBox';
import MovieList from './components/MovieList';
import AddMovieBox from './components/AddMovieBox';
import Footer from './components/Footer';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="container">
        <Header />
        <FilterBox />
        <MovieList />
        <AddMovieBox />
        <Footer />
      </div>
    );
  }
}

export default App;
