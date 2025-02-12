import { createContext, useContext } from "react";
import { useState } from "react";

const CartContext = createContext();

const useCartContext = () => useContext(CartContext);

export default useCartContext;

export function CartProvider({ children }) {
  const products = [
    {
      name: "Smartphone",
      price: 700,
      isAddedToCart: false,
    },
    {
      name: "Wireless Headphones",
      price: 150,
      isAddedToCart: true,
    },
    {
      name: "Laptop",
      price: 1300,
      isAddedToCart: false,
    },
    {
      name: "Smart Watch",
      price: 250,
      isAddedToCart: true,
    },
    {
      name: "Tablet",
      price: 500,
      isAddedToCart: false,
    },
  ];
  const [toggledProducts, setToggledProducts] = useState(products);

  function handleCartToggle(clickedProduct) {
    const updatedProducts = toggledProducts.map((product) => {
      if (clickedProduct.name === product.name) {
        return {
          ...product,
          isAddedToCart: !product.isAddedToCart,
        };
      }
      return product;
    });
    setToggledProducts(updatedProducts);
  }

  return (
    <CartContext.Provider value={{ toggledProducts, handleCartToggle }}>
      {children}
    </CartContext.Provider>
  );
}
