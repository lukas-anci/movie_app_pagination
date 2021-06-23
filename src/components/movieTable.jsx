import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import MovieRow from './movieRow';
import Pagination from './common/paginate';
import { paginate } from './../utils/paginate';
class MovieTable extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
  };
  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  handleDelete = (movieId) => {
    console.log('You are trying to delete, WHy ?', movieId);
    const moviesWithoutTheOneWeDeleted = this.state.movies.filter(
      (m) => m._id !== movieId
    );
    this.setState({ movies: moviesWithoutTheOneWeDeleted });
  };

  handlePageChange = (pageNum) => {
    // console.log(pageNum);
    this.setState({ currentPage: pageNum });
  };

  render() {
    const { movies: mv, currentPage, pageSize } = this.state;
    if (mv.length === 0)
      return (
        <div className="alert alert-warning">
          There are no movies at the moment
        </div>
      );

    // paduoti tik tiek movies kiek reikia pagal pagination

    const moviesPaginated = paginate(mv, currentPage, pageSize);

    return (
      <div className="movie">
        <h3 className="my-2">Please see out movies</h3>
        <div className="row">
          <div className="col-3">Genres</div>
          <div className="col">
            <p>Showing {mv.length} movies in out store</p>
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Stock</th>
                  <th>Rating</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {moviesPaginated.map((movie) => (
                  <MovieRow
                    onDelete={this.handleDelete}
                    movie={movie}
                    key={movie._id}
                  />
                ))}
              </tbody>
            </table>
            <Pagination
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
              itemCount={mv.length}
              pageSize={pageSize}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MovieTable;
