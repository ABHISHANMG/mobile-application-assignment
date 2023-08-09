import { useState } from "react";

export const useSortRating = (movies, initialSortOrder) => {
  const [sortOrder, setSortOrder] = useState(initialSortOrder);

  const [sortedArray, setSortedArray] = useState(movies);

  const sortAscending = (a, b) => {
    return a.voteAverage - b.voteAverage;
  };

  const sortDescending = (a, b) => {
    return b.voteAverage - a.voteAverage;
  };

  const ascendingData = (a, b) => {
    return a.releaseDate.localeCompare(b.releaseDate);
  };

  const descendingData = (a, b) => {
    return b.releaseDate.localeCompare(a.releaseDate);
  };

  const handleSortChange = (selectedValue) => {
    setSortOrder(selectedValue)
   
    switch (selectedValue) {
        case "asc":
          setSortedArray(movies.slice().sort(sortAscending));
          break;
        case "desc":
          setSortedArray(movies.slice().sort(sortDescending));
          break;
        case "recent":
          setSortedArray(movies.slice().sort(ascendingData));
          break;
        case "old":
          setSortedArray(movies.slice().sort(descendingData));
          break;
        default:
          break;
      }
  };

  return {
    sortOrder,
    sortedArray,
    handleSortChange,
  };
};
