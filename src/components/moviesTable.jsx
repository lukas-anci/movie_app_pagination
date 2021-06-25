import React, { Component } from 'react';
import MovieRow from './movieRow';

class MoviesTable extends Component {
  raiseSort = (sortBy) => {
    const sortColumnCopy = { ...this.props.sortColumn };
    if (sortColumnCopy.sortBy === sortBy) {
      sortColumnCopy.order = sortColumnCopy.order === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumnCopy.sortBy = sortBy;
      sortColumnCopy.order = 'asc';
    }
    this.props.onSort(sortColumnCopy);
  };

  render() {
    const { moviesPaginated, onDelete, sortColumn } = this.props;
    const iconSort =
      sortColumn.order === 'asc' ? (
        <i className="fa fa-sort-desc"></i>
      ) : (
        <i className="fa fa-sort-asc"></i>
      );
    return (
      <table className="table table-striped ">
        <thead>
          <tr>
            <th onClick={() => this.raiseSort('title')}>Title {iconSort} </th>
            <th onClick={() => this.raiseSort('genre.name')}>
              Genre {iconSort}
            </th>
            <th onClick={() => this.raiseSort('numberInStock')}>
              Stock {iconSort}
            </th>
            <th onClick={() => this.raiseSort('dailyRentalRate')}>
              Rating {iconSort}
            </th>
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
