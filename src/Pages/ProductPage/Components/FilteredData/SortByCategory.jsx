export const SortByCategory = (data, sortBy) => {
    let filteredList = data;
    if (
      sortBy.showManTshirt ||
      sortBy.showWomenTshirt ||
      sortBy.showKidsTshirt ||
      sortBy.showFamilyTshirt
    ) {
      const ManCategory = filteredList.reduce(
        (pre, curr) =>
          state.showManTshirt && curr.categoryName === "Man"
            ? [...pre, curr]
            : [...pre],
        []
      );
      const WomenCategory = filteredList.reduce(
        (pre, curr) =>
          state.showWomenTshirt && curr.categoryName === "Women"
            ? [...pre, curr]
            : [...pre],
        ManCategory
      );
      const KidsCategory = filteredList.reduce(
        (pre, curr) =>
          state.showKidsTshirt && curr.categoryName === "Kids"
            ? [...pre, curr]
            : [...pre],
        WomenCategory
      );
      const FamilyCategory = filteredList.reduce(
        (pre, curr) =>
          state.showWomenTshirt && curr.categoryName === "Family"
            ? [...pre, curr]
            : [...pre],
        KidsCategory
      );
      return FamilyCategory;
    }
    return filteredList;
  };