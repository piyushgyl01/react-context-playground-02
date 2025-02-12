import useCartContext from "../contexts/CartContext";

export default function CartCounter() {
  const { toggledProducts } = useCartContext();

  return (
    <>
      ({toggledProducts.filter((product) => product.isAddedToCart).length}/
      {toggledProducts.length})
    </>
  );
}
