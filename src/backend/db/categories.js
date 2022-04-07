import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Man's T-shirt",
    img: "/assets/image/HomePage-Images/Trendy-T Man.jpg",
    type: "Show_Man_Tshirt",
  },
  {
    _id: uuid(),
    categoryName: "women's T-shirt",
    img: "/assets/image/HomePage-Images/Trendy-T Women.jpg",
    type: "Show_Women_Tshirt",
  },
  {
    _id: uuid(),
    categoryName: "Kid's T-Shirt",
    img: "/assets/image/HomePage-Images/Trendy-T Kids.jpg",
    type: "Show_Kids_Tshirt",
  },
  {
    _id: uuid(),
    categoryName: "Family T-Shirt",
    img: "/assets/image/HomePage-Images/Trendy-T Family.jpg",
    type: "Show_Family_Tshirt",
  },
];
