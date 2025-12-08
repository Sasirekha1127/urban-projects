import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// NAVBAR
import NavbarUC from "./components/Navbar.jsx";

// MAIN PAGES
import Home from "./Pages/Home.jsx";
import Beauty from "./Pages/Beauty.jsx";
import Revamp from "./Pages/Revamp.jsx";
import Native from "./Pages/Native.jsx";

// SERVICE PAGES
import BathroomCleaningPage from "./Pages/BathroomCleaningPage.jsx";
import CartPage from "./Pages/CardPage.jsx";
import Wallmakeover from "./Pages/Wallmakeover.jsx";
import Sofacleaning from "./Pages/Sofacleaning.jsx";
import Salonpackages from "./Pages/Salonpackages.jsx";
import SalonLuxe from "./Pages/Salonluxe.jsx";
import ViewCartPage from "./Pages/ViewCartPage.jsx";

// COMPONENTS
import CarouselPage from "./components/Carouselpage.jsx";
import Newnote from "./components/Newnote.jsx";
import Mostbook from "./components/Mostbook.jsx";
import Walls from "./components/Walls.jsx";
import SalonPage from "./components/Salon.jsx";
import Wallpannel from "./components/Wallpannel.jsx";
import CleaningPest from "./components/Cleaningpest.jsx";
import Wallpannels from "./components/Wallpannels.jsx";
import Salonmen from "./components/Salonmen.jsx";
import Wal from "./components/Wal.jsx";
import Homerepair from "./components/Homerepair.jsx";
import Load from "./components/Loading.jsx";

export default function AppContent({ cart, setCart }) {
  const location = useLocation();

  // Addons State
  const [addons, setAddons] = useState([]);

  // Navbar & Search hiding paths
  const hideNavbarRoutes = ["/cart", "/view-cart", "/salon/luxe", "/bathroom-cleaning"];
  const hideSearchRoutes = ["/beauty", "/native", "/revamp"];

  const currentPath = location.pathname.replace(/\/$/, "").toLowerCase();

  const shouldHideNavbar = hideNavbarRoutes.includes(currentPath);
  const shouldHideSearch = hideSearchRoutes.includes(currentPath);

  return (
    <>
      {/* NAVBAR SHOW / HIDE */}
      {!shouldHideNavbar && (
        <NavbarUC
          hideSearch={shouldHideSearch}
          hideLocation={false}
          hideIcons={false}
          hideLink={false}
          cart={cart}
          setCart={setCart}
        />
      )}

      {/* ROUTES */}
      <Routes>
        {/* MAIN ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/Load" element={<Load />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/revamp" element={<Revamp />} />
        <Route path="/native" element={<Native />} />

        {/* CART */}
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        <Route path="/salon/luxe" element={<SalonLuxe cart={cart} setCart={setCart} />} />

        {/* CLEANING / SERVICE */}
        <Route path="/wallmakeover" element={<Wallmakeover />} />
        <Route path="/sofacleaning" element={<Sofacleaning />} />
        <Route path="/salonpackages" element={<Salonpackages />} />

        {/* VIEW CART → PASSES CART + ADDONS */}
        <Route
          path="/view-cart"
          element={
            <ViewCartPage
              cart={cart}
              setCart={setCart}
              addons={addons}
              setAddons={setAddons}
            />
          }
        />

        {/* OTHER COMPONENT ROUTES */}
        <Route path="/carouselpage" element={<CarouselPage />} />
        <Route path="/Newnote" element={<Newnote />} />
        <Route path="/Mostbook" element={<Mostbook />} />
        <Route path="/Walls" element={<Walls />} />
        <Route path="/salon" element={<SalonPage />} />
        <Route path="/Wallpannel" element={<Wallpannel />} />
        <Route path="/Cleaningpest" element={<CleaningPest />} />
        <Route path="/Wallpannels" element={<Wallpannels />} />
        <Route path="/Salonmen" element={<Salonmen />} />
        <Route path="/Wal" element={<Wal />} />
        <Route path="/homerepair" element={<Homerepair />} />
        <Route path="/bathroom-cleaning" element={<BathroomCleaningPage />} />
      </Routes>
    </>
  );
}
