import "./product.css";
import "./product-Responsive.css";
import { Nav, Footer, NavForMobile } from "../../components/Index";
import {
  Search,
  SortByPrice,
  SortByCategory,
  SortByRating,
  SortByRange,
  ClearFilter,
  ProductCart,
} from "./Components/Index";

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
      <main className="product-page__main-container">
        <ProductCart />
      </main>
      <Footer />
    </div>
  );
}
