import useCartContext from "../contexts/CartContext";

export default function Products() {
  const { toggledProducts, handleCartToggle } = useCartContext();

  return (
    <main className="app">
      <h1>Products ({toggledProducts.length})</h1>
      <ul>
        {toggledProducts.map((product) => (
          <li key={product.name}>
            {product.name} <br /> ${product.price} <br />
            <button onClick={() => handleCartToggle(product)}>
              {product.isAddedToCart ? "In Cart" : "Add To Cart"}
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
