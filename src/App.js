import "./styles.css";

import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Layout from "./components/Layout";

import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";

export default function App() {
  return (
    <div className="app">
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Products />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </CartProvider>
    </div>
  );
}
