import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { createContext, useContext, useReducer } from "react";
import { useAuth } from "./AuthContext";
import { Reducer } from "../Reducer/userReducer";
const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const { authState } = useAuth();
  const [state, dispatch] = useReducer(Reducer, { wishlist: [], cart: [] });

  const AddToWishlist = (product) => {
    if (authState.isUserLoggedIn) {
      dispatch({ type: "Add_To_Wishlist", payload: product, id: product.id });
      const isProductOccurance = state.wishlist.some((item) => item._id === product._id);
      if (!isProductOccurance) {
        try {
          (async () => {
            await axios.post("/api/user/wishlist", { product }, { headers: { authorization: authState.token } });
          })();
          toast.success("Added to Wishlist");
        } catch (error) {
          toast.error("Error");
        }
      }
    }else{
      toast.success("Kindly Login");
    }
  };

  const RemoveFromWishlist = async (product) => {
    if (authState.isUserLoggedIn) {
      dispatch({ type: "Remove_From_Wishlist", payload: product.id, id: product.id });
      try {
        await axios.delete(`/api/user/wishlist/${product._id}`, {
          headers: { authorization: authState.token },
        });
        toast.success("Removed From Wishlist");
      } catch (error) {
        toast.error("Error");
      }
    }
  };

  const AddToCart = async (product) => {
    if (authState.isUserLoggedIn) {
      dispatch({ type: "Add_To_Cart", payload: product, id: product.id });
      const isProductOccurance = state.cart.some((item) => item._id === product._id);
      if (isProductOccurance) {
        try {
          (async () => {
            await axios.post(
              `/api/user/cart/${product._id}`,
              {
                action: {
                  type: "increment",
                },
              },
              { headers: { authorization: authState.token } }
            );
          })();
          toast.success("Product Quantity Increased");
        } catch (error) {
          toast.error("Error");
        }
      } else {
        try {
          (async () => {
            await axios.post("/api/user/cart", { product }, { headers: { authorization: authState.token } });
          })();
          toast.success("Added To Cart");
        } catch (error) {
          toast.error("Error");
        }
      }
    }else{
      toast.success("Kindly Login");
    }
  };
  const RemoveFromCart = async (product) => {
    if (authState.isUserLoggedIn) {
      dispatch({ type: "Remove_From_Cart", payload: product.id });
      try {
        await axios.delete(`/api/user/cart/${product._id}`, {
          headers: { authorization: authState.token },
        });
        toast.success("Removed From Cart");
      } catch (err) {
        toast.error("Error");
      }
    }
  };

  const IncreaseQty = async (product) => {
    if (authState.isUserLoggedIn) {
      dispatch({ type: "Add_Item_In_Cart", id: product.id });
      try {
        await axios.post(
          `/api/user/cart/${product._id}`,
          {
            action: {
              type: "increment",
            },
          },
          { headers: { authorization: authState.token } }
        );
      } catch (error) {
        toast.error("Error");
      }
    }
  };

  const DecreaseQty = async (product) => {
    if (authState.isUserLoggedIn) {
      dispatch({ type: "Sub_Item_From_Cart", id: product.id });
      try {
        await axios.post(
          `/api/user/cart/${product._id}`,
          {
            action: {
              type: "decrement",
            },
          },
          { headers: { authorization: authState.token } }
        );
      } catch (error) {
        toast.error("Error");
      }
    }
  };

  useEffect(() => {
    if (authState.isUserLoggedIn) {
      (async () => {
        try {
          const {
            data: { wishlist },
          } = await axios.get("/api/user/wishlist", { headers: { authorization: authState.token } });
          const {
            data: { cart },
          } = await axios.get("/api/user/cart", { headers: { authorization: authState.token } });
          dispatch({ type: "Reset" });
          dispatch({ type: "Load_Cart_Data", payload: cart });
          dispatch({ type: "Load_Wishlist_Data", payload: wishlist });
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [authState]);

  return (
    <UserContext.Provider
      value={{
        AddToWishlist,
        RemoveFromWishlist,
        AddToCart,
        RemoveFromCart,
        IncreaseQty,
        DecreaseQty,
        state,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);
export { useUser, UserProvider };
