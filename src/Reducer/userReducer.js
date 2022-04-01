export const Reducer = (state, action) => {
  switch (action.type) {
    case "Wishlist":
      if (state.wishlist.length === 0) {
        return { ...state, wishlist: [...state.wishlist, action.payload] };
      } else {
        return {
          ...state,
          wishlist: state.wishlist
            .filter((item) => item.id !== action.id)
            .concat(action.payload),
        };
      }
    case "Remove_From_Wishlist":
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.payload),
      };
    case "Cart":
      if (state.cart.length === 0) {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, qty: 1 }],
        };
      }
      let productOccurance = state.cart.find((item) => item.id === action.id);
      if (productOccurance) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            action.id === item.id ? { ...item, qty: item.qty + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          cart: state.cart
            .filter((item) => action.id !== item.id)
            .concat({ ...action.payload, qty: 1 }),
        };
      }
    case "Remove_From_Cart":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "Add_Item_In_Cart":
      return {
        ...state,
        cart: state.cart.map((item) =>
          action.id === item.id ? { ...item, qty: item.qty + 1 } : item
        ),
      };
    case "Sub_Item_From_Cart":
      return {
        ...state,
        cart: state.cart.map((item) =>
          action.id === item.id ? { ...item, qty: item.qty - 1 } : item
        ),
      };
  }
};
