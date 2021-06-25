import React, { Component } from 'react';
import MovieRow from './movieRow';

class MoviesTable extends Component {
  render() {
    const { moviesPaginated, onDelete, onSort } = this.props;
    return (
      <table className="table table-striped ">
        <thead>
          <tr>
            <th onClick={() => onSort('title')}>Title</th>
            <th onClick={() => onSort('genre.name')}>Genre</th>
            <th onClick={() => onSort('numberInStock')}>Stock</th>
            <th onClick={() => onSort('dailyRentalRate')}>Rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {moviesPaginated.map((movie) => (
            <MovieRow onDelete={onDelete} movie={movie} key={movie._id} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
