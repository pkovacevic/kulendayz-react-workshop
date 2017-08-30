import * as React from 'react';
import Movie from './Movie';
import Label from './Label';
import IMovie from '../models/IMovie';

interface IMoviesListProps {
    movies: IMovie[];
    toggleWatchedMovieCallback: (id: number) => void;
    removeMovieCallback: (id: number) => void;
}

class MovieList extends React.Component<IMoviesListProps, {}> {

    render() {
        const movies = this.props.movies.map((m, i) => (
            <Movie
                toggleWatchedMovieCallback={this.props.toggleWatchedMovieCallback}
                removeMovieCallback={this.props.removeMovieCallback}
                key={m.id}
                index={i}
                movie={m}
            />));

        return (
            <div className="row">
                <div className="col-md-12">
                    <Label text="My movie list"></Label>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Watched</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default MovieList;
