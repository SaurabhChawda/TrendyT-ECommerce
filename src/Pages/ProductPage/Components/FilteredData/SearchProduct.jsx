export const SearchProduct = (data, sortBy) => {
  let filteredList = data;
  if (sortBy) {
    return filteredList.filter((item) =>
      item.title.toLowerCase().match(sortBy.toLowerCase())
    );
  }
  return data;
};
