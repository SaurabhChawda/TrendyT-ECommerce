import { createContext, useContext, useReducer } from "react";
import { Reducer } from "../Reducer/userReducer";
const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, { wishlist: [], cart: [] });
  // console.log(`WishList:- ${state.wishlist}`);
  console.log(`Cart :- ${state.cart}`);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);
export { useUser, UserProvider };
