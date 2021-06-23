export function paginate(items, pageNumber, pageSize) {
  // items [9]
  // number 1
  // pageSize 4

  // items 1-4

  const startIndex = (pageNumber - 1) * pageSize;
  //   const startIndex2 = pageNumber * pageSize - pageSize;

  //   console.log(startIndex, startIndex2);

  return items.slice(startIndex, startIndex + pageSize);
}
