import * as React from "react"
import Header from "./components/Header"
import FilterBox from "./components/FilterBox"
import MovieList from "./components/MovieList"
import AddMovieBox from "./components/AddMovieBox"
import Footer from "./components/Footer"
import IMovie from "./models/IMovie"
import { getMoviesAsync } from "./services/movieService"

interface IAppState {
  isLoading: boolean
  movies: IMovie[]
  filterText: string
  addMovieText: string
  errorText: string | null
}

class App extends React.Component<{}, IAppState> {
  state: IAppState = {
    isLoading: false,
    addMovieText: "",
    errorText: null,
    movies: [],
    filterText: ""
  }

  componentDidMount() {
    this.setState({ isLoading: true })

    getMoviesAsync().then(r => {
      this.setState({
        movies: r.data,
        isLoading: false
      })
    })
  }

  toggleWatchedMovieCallback = (movieId: number) => {
    this.setState(prevState => {
      let newListOfMovies = prevState.movies.map(m => {
        if (m.id !== movieId) {
          return m
        }
        return { ...m, isWatched: !m.isWatched }
      })
      return {
        movies: newListOfMovies
      }
    })
  }

  removeMovieCallback = (movieId: number) => {
    this.setState(prevState => {
      return {
        movies: prevState.movies.filter(m => m.id != movieId)
      }
    })
  }

  handleAddMovie = (title: string) => {
    this.setState(prevState => ({
      filterText: "",
      movies: [
        ...prevState.movies,
        { id: this.createId(), title: title, isWatched: false } as IMovie
      ]
    }))
  }

  // Create a new id larger than all ids currently in the movies list
  createId = () => {
    let id = 1
    let movies = this.state.movies

    movies.forEach(m => {
      if (m.id > id) id = m.id + 1
    })

    return id
  }

  handleFilterChange = (filter: string) => {
    this.setState({ filterText: filter })
  }

  render() {
    let { movies, filterText } = this.state
    if (filterText)
      movies = movies.filter(m => m.title.indexOf(filterText) !== -1)

    return (
      <div className="container">
        {this.state.isLoading && <div>Loading...</div>}
        <Header text="Movies" />
        <FilterBox
          filter={this.state.filterText}
          handleFilterChange={this.handleFilterChange}
        />
        <MovieList
          movies={movies}
          toggleWatchedMovieCallback={this.toggleWatchedMovieCallback}
          removeMovieCallback={this.removeMovieCallback}
        />
        <AddMovieBox handleAddMovie={this.handleAddMovie} />
        <Footer text="Kulendayz" />
      </div>
    )
  }
}

export default App
