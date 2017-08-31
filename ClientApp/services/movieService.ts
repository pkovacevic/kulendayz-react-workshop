import axios from 'axios'
import IMovie from '../models/IMovie';

export function getMovies(): IMovie[] {
    return [{
        id: 1,
        isWatched: true,
        title: 'Matrix 1'
    },
    {
        id: 2,
        isWatched: true,
        title: 'Matrix 2'
    }, {
        id: 3,
        isWatched: true,
        title: 'Matrix 3'
    }, {
        id: 4,
        isWatched: false,
        title: 'Twilight'
    }];
}

export function getMoviesAsync() {
    return axios.get('/api/movies')
}