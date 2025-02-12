import { Link } from "react-router-dom";
import useCartContext from "../contexts/CartContext";

export default function EmptyCart() {
  const { toggledProducts } = useCartContext();

  return (
    <>
      {toggledProducts.filter((product) => product.isAddedToCart).length ===
        0 && (
        <>
          <p>No products has been added to the cart</p>
          <button>
            <Link to="/" style={{ color: "#2e3440", textDecoration: "none" }}>
              Add Products
            </Link>
          </button>
        </>
      )}
    </>
  );
}
