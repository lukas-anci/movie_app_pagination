export function movieSort(sortColumn, filteredMovies) {
  const posNeg = {
    pos: 1,
    neg: -1,
  };

  if (sortColumn.order === 'desc') {
    posNeg.neg = 1;
    posNeg.pos = -1;
  }
  filteredMovies.sort((a, b) =>
    a[sortColumn.sortBy] < b[sortColumn.sortBy] ? posNeg.pos : posNeg.neg
  );
  if (sortColumn.sortBy === 'genre.name') {
    filteredMovies.sort((a, b) =>
      a.genre.name < b.genre.name ? posNeg.pos : posNeg.neg
    );
  }
  return filteredMovies;
}
