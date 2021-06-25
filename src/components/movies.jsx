import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';

import Pagination from './common/paginate';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';
import MoviesTable from './moviesTable';
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { sortBy: 'title', order: 'asc' },
  };
  componentDidMount() {
    // add extra item to genres
    const genres = [{ _id: '', name: 'All genres' }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: genres });
  }

  handleDelete = (movieId) => {
    const moviesWithoutTheOneWeDeleted = this.state.movies.filter(
      (m) => m._id !== movieId
    );
    this.setState({ movies: moviesWithoutTheOneWeDeleted });
  };

  handlePageChange = (pageNum) => {
    // console.log(pageNum);
    this.setState({ currentPage: pageNum });
  };

  handleGenreChange = (genre) => {
    this.setState({ currentGenre: genre, currentPage: 1 });
  };

  handleSort = (sortBy) => {
    console.log('sortBy', sortBy);
    this.setState({ sortColumn: { sortBy: sortBy, order: 'asc' } });
  };

  render() {
    const {
      movies: mv,
      currentPage,
      currentGenre,
      pageSize,
      genres,
      sortColumn,
    } = this.state;
    if (mv.length === 0)
      return (
        <div className="alert alert-warning">
          There are no movies at the moment
        </div>
      );

    const filteredMovies =
      currentGenre && currentGenre._id
        ? mv.filter((m) => m.genre._id === currentGenre._id)
        : mv;

    // sort filteredMovies by sortColumn.sortBy
    // genre.name fix
    filteredMovies.sort((a, b) =>
      a[sortColumn.sortBy] > b[sortColumn.sortBy] ? 1 : -1
    );
    if (sortColumn.sortBy === 'genre.name') {
      filteredMovies.sort((a, b) => (a.genre.name > b.genre.name ? 1 : -1));
    }

    // paduoti tik tiek movies kiek reikia pagal pagination

    const moviesPaginated = paginate(filteredMovies, currentPage, pageSize);

    return (
      <div className="movie">
        <h3 className="my-2">Please see out movies</h3>
        <div className="row">
          <div className="col-3">
            <ListGroup
              currentGenre={currentGenre}
              onGenreChange={this.handleGenreChange}
              items={genres}
            />
          </div>
          <div className="col">
            <p>Showing {moviesPaginated.length} movies in out store</p>
            <MoviesTable
              onSort={this.handleSort}
              onDelete={this.handleDelete}
              moviesPaginated={moviesPaginated}
            />
            <Pagination
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
              itemCount={filteredMovies.length}
              pageSize={pageSize}
            />
          </div>
        </div>
        {/* <ListGroup
          textProperty="title"
          valueProperty="id"
          onGenreChange={this.handleGenreChange}
          items={this.state.testArr}
        /> */}
      </div>
    );
  }
}

export default Movies;
