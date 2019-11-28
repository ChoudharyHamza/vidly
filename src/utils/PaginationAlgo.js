// since we do not need a class or something just a function
export function PaginationAlgo(itemsArr, pageLength, currentPage) {
  // so first we need to understand the index of the starting item for that we have algo
  const startIndex = (currentPage - 1) * pageLength;
  // so we use slice method to get a small array that we need
  const newArr = itemsArr.slice(startIndex, startIndex + pageLength);
  return newArr;
}
