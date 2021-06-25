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

  renderSortIcon = (iconColumn) => {
    const { sortBy, order } = this.props.sortColumn;
    if (iconColumn === sortBy && order === 'asc')
      return <i className="fa fa-sort-asc"></i>;

    if (iconColumn === sortBy && order === 'desc')
      return <i className="fa fa-sort-desc"></i>;

    return;
  };

  render() {
    const { moviesPaginated, onDelete } = this.props;

    return (
      <table className="table table-striped ">
        <thead>
          <tr>
            <th onClick={() => this.raiseSort('title')}>
              Title {this.renderSortIcon('title')}{' '}
            </th>
            <th onClick={() => this.raiseSort('genre.name')}>
              Genre {this.renderSortIcon('genre.name')}
            </th>
            <th onClick={() => this.raiseSort('numberInStock')}>
              Stock {this.renderSortIcon('numberInStock')}
            </th>
            <th onClick={() => this.raiseSort('dailyRentalRate')}>
              Rating {this.renderSortIcon('dailyRentalRate')}
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
