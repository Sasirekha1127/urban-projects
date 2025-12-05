import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppContent from "./Router.jsx";

export default function App() {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [hideSearch, setHideSearch] = useState(false);

  // Cart state create pannrom
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <AppContent
        setHideNavbar={setHideNavbar}
        hideNavbar={hideNavbar}
        hideSearch={hideSearch}
        setHideSearch={setHideSearch}
        cart={cart}       // pass pannrom
        setCart={setCart} // pass pannrom
      />
    </Router>
  );
}
