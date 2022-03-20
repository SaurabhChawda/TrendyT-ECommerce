import { Nav } from "../../components/Nav/Nav";
import { NavForMobile } from "../../components/NavForMobile/NavForMobile";
import { Footer } from "../../components/Footer/Footer";
import { Search } from "./Components/Search";
import { SortByRange } from "./Components/SortByRange";
import { SortByRating } from "./Components/SortByRating";
import { ClearFilter } from "./Components/ClearFilter";
import { SortByPrice } from "./Components/SortByPrice";
import { SortByCategory } from "./Components/SortByCategory";

import "./product.css";
import "./product-Responsive.css";
export function Product() {
  return (
    <div className="product-page">
      <Nav />
      <NavForMobile />
      <div className="sidebar">
        <Search />
        <SortByPrice />
        <SortByCategory />
        <SortByRating />
        <SortByRange />
        <ClearFilter />
      </div>
      <main></main>
      <Footer />
    </div>
  );
}
