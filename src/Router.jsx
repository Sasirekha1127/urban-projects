import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavbarUC from "./components/Navbar.jsx";
import CartPage from "./Pages/CardPage.jsx";
import Beauty from "./Pages/Beauty.jsx";
import Home from "./Pages/Home.jsx";
import BathroomCleaning from "./Pages/BathroomCleaning.jsx";
// import DoorCleaning from "./Pages/DoorCleaning.jsx";
import SalonPage from "./Pages/SalonPage";

function AppContent({ setHideNavbar, hideNavbar }) {
  const location = useLocation();

  // Pages  Navbar should always be hidden
  const alwaysHideRoutes = ["/cart"];
  const shouldHideNavbar = alwaysHideRoutes.includes(location.pathname) || hideNavbar;

  return (
    <>
      {/* Show Navbar only if allowed */}
      {!shouldHideNavbar && <NavbarUC />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beauty" element={<Beauty setHideNavbar={setHideNavbar} />} />
        {/* <Route path="/revamp" element={<Revamp setHideNavbar={setHideNavbar} />} /> */}
        {/* <Route path="/Native" element={<Native setHideNavbar={setHideNavbar} />} /> */}
        <Route path="/bathroom-cleaning" element={<BathroomCleaning />} />

        {/* <Route path="/Door-cleaning " element={<DoorCleaning />} /> */}

        <Route path="/salon" element={<SalonPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default function App() {
  const [hideNavbar, setHideNavbar] = useState(false);

  return (
    <Router>
      <AppContent setHideNavbar={setHideNavbar} hideNavbar={hideNavbar} />
    </Router>
  );
}
