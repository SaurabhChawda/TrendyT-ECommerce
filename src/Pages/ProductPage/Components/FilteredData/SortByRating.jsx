export const SortByRating = (data, sortBy) => {
    let filteredList = data;
    if (sortBy) {
      if (sortBy === "4STAR")
        return filteredList.filter((item) => (item.Rating >= 4 ? true : false));

      if (sortBy === "3STAR")
        return filteredList.filter((item) => (item.Rating >= 3 ? true : false));

      if (sortBy === "2STAR")
        return filteredList.filter((item) => (item.Rating >= 2 ? true : false));

      if (sortBy === "1STAR")
        return filteredList.filter((item) => (item.Rating >= 1 ? true : false));

      return filteredList;
    }
    return filteredList;
  };