import { useUser } from "../../../Contexts/Index";
export const WishlistHeader = () => {
  const { state } = useUser();
  return (
    <section className="wishlist__header">
      <h3 className="wishlist__title">My Wishlist({state.wishlist.length})</h3>
    </section>
  );
};
