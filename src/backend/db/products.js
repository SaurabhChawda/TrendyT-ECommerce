import { v4 as uuid } from "uuid";
import feelAlive from "/assets/image/Product-Images/feel Alive";
import googleIt from "/assets/image/Product-Images/google IT.jpg";
import love from "/assets/image/Product-Images/Love.jpg";
import math from "/assets/image/Product-Images/math.jpg";
import Owl from "/assets/image/Product-Images/Owl.jpg";
import TalkToYouLater from "/assets/image/Product-Images/Talk to you later.jpg";
import Tom from "/assets/image/Product-Images/Tom.jpg";
import TomAndJerry from "/assets/image/Product-Images/Tom and Jerry.jpg";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img: math,
    title: "Mathematics",
    price: 350,
    originalPrice: 650,
    categoryName: "Man",
    Rating: 4,
  },
  {
    _id: uuid(),
    img: feelAlive,
    title: "Feel Alive",
    price: 450,
    originalPrice: 550,
    categoryName: "Man",
    Rating: 3,
  },
  {
    _id: uuid(),
    img: googleIt,
    title: "Google It",
    price: 350,
    originalPrice: 650,
    categoryName: "Man",
    Rating: 2,
  },
  {
    _id: uuid(),
    img: Owl,
    title: "Owl T-Shirt",
    price: 350,
    originalPrice: 500,
    categoryName: "Women",
    Rating: 4,
  },
  {
    _id: uuid(),
    img: love,
    title: "Camera Love",
    price: 450,
    originalPrice: 550,
    categoryName: "Man",
    Rating: 3,
  },
  {
    _id: uuid(),
    img: Tom,
    title: "Tom",
    price: 350,
    originalPrice: 500,
    categoryName: "Kids",
    Rating: 4,
  },
  {
    _id: uuid(),
    img: TomAndJerry,
    title: "Tom and Jerry",
    price: 450,
    originalPrice: 550,
    categoryName: "Kids",
    Rating: 2,
  },
  {
    _id: uuid(),
    img: TalkToYouLater,
    title: "Talk to you later",
    price: 350,
    originalPrice: 650,
    categoryName: "Kids",
    Rating: 1,
  },
];
