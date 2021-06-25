import React, { Component } from 'react';
import MovieRow from './movieRow';

class MoviesTable extends Component {
  render() {
    const { moviesPaginated, onDelete } = this.props;
    return (
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
            <MovieRow onDelete={onDelete} movie={movie} key={movie._id} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
