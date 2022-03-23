export const SortByPrice = (data, sortBy) => {
  let filteredList = data;
  if (sortBy) {
    if (sortBy === "0")
      return filteredList.filter((item) => (item.price <= 0 ? true : false));

    if (sortBy === "200")
      return filteredList.filter((item) => (item.price <= 200 ? true : false));

    if (sortBy === "400")
      return filteredList.filter((item) => (item.price <= 400 ? true : false));

    if (sortBy === "600")
      return filteredList.filter((item) => (item.price <= 600 ? true : false));

    if (sortBy === "800")
      return filteredList.filter((item) => (item.price <= 800 ? true : false));

    return filteredList;
  }
  return filteredList;
};
