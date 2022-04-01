export const SortByCategory = (data, state) => {
  let filteredList = data;
  if (
    state.showManTshirt ||
    state.showWomenTshirt ||
    state.showKidsTshirt ||
    state.showFamilyTshirt
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
        state.showFamilyTshirt && curr.categoryName === "Family"
          ? [...pre, curr]
          : [...pre],
      KidsCategory
    );
    return FamilyCategory;
  }
  return data;
};
