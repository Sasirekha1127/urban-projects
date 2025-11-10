import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavbarUC from "./components/Navbar.jsx";
import CartPage from "./Pages/CardPage.jsx";
import Beauty from "./Pages/Beauty.jsx";
import Revamp from "./Pages/Revamp.jsx";
import Native from "./Pages/Native.jsx";
import Home from "./Pages/Home.jsx";
import BathroomCleaning from "./Pages/BathroomCleaning.jsx";
import Wallmakeover from "./Pages/Wallmakeover.jsx";
import Sofacleaning from "./Pages/Sofacleaning.jsx";
import Salonpackages from "./Pages/Salonpackages.jsx"
import SalonPage from "./Pages/SalonPage.jsx";

function AppContent({ setHideNavbar, hideNavbar }) {
  const location = useLocation();

  // Pages where Navbar should always be hidden
  const alwaysHideRoutes = ["/cart"];
  const shouldHideNavbar = alwaysHideRoutes.includes(location.pathname) || hideNavbar;

  return (
    <>
      {/* Show Navbar only if allowed */}
      {!shouldHideNavbar && <NavbarUC />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beauty" element={<Beauty setHideNavbar={setHideNavbar} />} />
        <Route path="/revamp" element={<Revamp setHideNavbar={setHideNavbar} />} />
        <Route path="/native" element={<Native setHideNavbar={setHideNavbar} />} />
        <Route path="/bathroom-cleaning" element={<BathroomCleaning />} />
        <Route path="/wallmakeover" element={<Wallmakeover setHideNavbar={setHideNavbar} />} />
        <Route path="/sofacleaning" element={<Sofacleaning setHideNavbar={setHideNavbar} />} />
        <Route path="/sofacleaning" element={<Sofacleaning setHideNavbar={setHideNavbar} />} />
        <Route path="/salonpackages" element={<Salonpackages setHideNavbar={setHideNavbar} />} />
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
