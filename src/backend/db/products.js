import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img: "/assets/image/Product-Images/math.jpg",
    title: "Mathematics",
    price: 350,
    originalPrice: 650,
    discount: 300,
    categoryName: "Family",
    Rating: 4,
  },
  {
    _id: uuid(),
    img: "/assets/image/Product-Images/feel Alive.jpg",
    title: "Feel Alive",
    price: 450,
    originalPrice: 550,
    discount: 100,
    categoryName: "Man",
    Rating: 2,
  },
  {
    _id: uuid(),
    img: "/assets/image/Product-Images/google IT.jpg",
    title: "Google It",
    price: 350,
    originalPrice: 650,
    discount: 300,
    categoryName: "Man",
    Rating: 2,
  },
  {
    _id: uuid(),
    img: "/assets/image/Product-Images/Owl.jpg",
    title: "Owl T-Shirt",
    price: 350,
    originalPrice: 500,
    discount: 150,
    categoryName: "Women",
    Rating: 4,
  },
  {
    _id: uuid(),
    img: "/assets/image/Product-Images/Love.jpg",
    title: "Camera Love",
    price: 450,
    originalPrice: 550,
    discount: 100,
    categoryName: "Man",
    Rating: 3,
  },
  {
    _id: uuid(),
    img: "/assets/image/Product-Images/Tom.jpg",
    title: "Tom",
    price: 350,
    originalPrice: 500,
    discount: 150,
    categoryName: "Kids",
    Rating: 4,
  },
  {
    _id: uuid(),
    img: "/assets/image/Product-Images/Tom and Jerry.jpg",
    title: "Tom and Jerry",
    price: 450,
    originalPrice: 550,
    discount: 100,
    categoryName: "Kids",
    Rating: 2,
  },
  {
    _id: uuid(),
    img: "/assets/image/Product-Images/Talk to you later.jpg",
    title: "Talk to you later",
    price: 350,
    originalPrice: 650,
    discount: 300,
    categoryName: "Kids",
    Rating: 1,
  },
];
