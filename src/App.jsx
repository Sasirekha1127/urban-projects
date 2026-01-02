import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppContent from "./Router.jsx";

export default function App() {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [hideSearch, setHideSearch] = useState(false);

  // ✅ Initialize cart from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Router>
      <AppContent
        setHideNavbar={setHideNavbar}
        hideNavbar={hideNavbar}
        hideSearch={hideSearch}
        setHideSearch={setHideSearch}
        cart={cart}
        setCart={setCart}
      />
    </Router>
  );
}
