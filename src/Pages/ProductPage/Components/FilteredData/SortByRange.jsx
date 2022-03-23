export const SortByRange = (data, sortBy) => {
  let filteredList = data;
  if (sortBy) {
    if (sortBy === "LOW_TO_HIGH")
      return filteredList.sort((a, b) => a.price - b.price);

    if (sortBy === "HIGH_TO_LOW")
      return filteredList.sort((a, b) => b.price - a.price);

    return filteredList;
  }
  return filteredList;
};
