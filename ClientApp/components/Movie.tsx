import * as React from 'react';
import IMovie from '../models/IMovie';

interface IMovieProps {
  movie: IMovie;
  index: number;
  toggleWatchedMovieCallback: (id: number) => void;
  removeMovieCallback: (id: number) => void;
}


class Movie extends React.Component<IMovieProps, {}> {
  render() {
    return (
      <tr>
        <td>
          {this.props.index + 1}
        </td>
        <td>
          {this.props.movie.title}
        </td>
        <td>
          <button onClick={() => this.props.toggleWatchedMovieCallback(this.props.movie.id)} className="btn btn-default">
            <span className={this.props.movie.isWatched ?
              "glyphicon glyphicon-ok" : "glyphicon glyphicon-minus"}>
            </span>
          </button>
        </td>
        <td>
          <button onClick={() => this.props.removeMovieCallback(this.props.movie.id)} 
            className="btn btn-danger">
            <span className="glyphicon glyphicon-trash"></span>
          </button>
        </td>
      </tr>);
  }
}

export default Movie;
