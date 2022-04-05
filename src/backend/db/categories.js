import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Man",
    img: "/assets/image/HomePage-Images/Trendy-T Man.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Women",
    img: "/assets/image/HomePage-Images/Trendy-T Women.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Kids",
    img: "/assets/image/HomePage-Images/Trendy-T Kids.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Family",
    img: "/assets/image/HomePage-Images/Trendy-T Family.jpg",
  },
];
