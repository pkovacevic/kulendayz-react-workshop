import * as React from 'react';
import Movie from './Movie';

class MovieList extends React.Component<{}, {}> {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h4>My movie list</h4>
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
                            <Movie></Movie>
                            <Movie></Movie>
                            <Movie></Movie>
                            <Movie></Movie>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default MovieList;
