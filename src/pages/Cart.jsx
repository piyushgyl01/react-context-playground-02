import EmptyCart from "../components/EmptyCart";
import useCartContext from "../contexts/CartContext";



export default function Cart() {
  const { toggledProducts, handleCartToggle } = useCartContext();

  return (
    <main className="app">
      <h1>
        Cart (
        {toggledProducts.filter((product) => product.isAddedToCart).length})
      </h1>
      <EmptyCart />
      <ul>
        {toggledProducts
          .filter((product) => product.isAddedToCart)
          .map((product) => (
            <li key={product.name}>
              {product.name} <br /> ${product.price} <br />
              <button onClick={() => handleCartToggle(product)}>
                Remove from cart
              </button>
            </li>
          ))}
      </ul>
    </main>
  );
}
