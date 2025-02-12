import React from "react";
import { Link } from "react-router-dom";
import CartCounter from "./CartCounter";

export default function Nav() {
  return (
    <nav>
      <div className="logo">App</div>
      <div className="links">
        <Link to="/" className="nav-link">
          Products
        </Link>
        <Link to="/cart" className="nav-link">
          Cart <CartCounter />
        </Link>
      </div>
    </nav>
  );
}
