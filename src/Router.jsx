import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavbarUC from "./components/Navbar.jsx";

// Pages
import Home from './pages/Home.jsx';
import Beauty from './pages/Beauty.jsx';
import Revamp from './pages/Revamp.jsx';
import Native from './pages/Native.jsx';
import BathroomCleaningPage from "./Pages/BathroomCleaningPage.jsx";
import CartPage from './Pages/CardPage.jsx';
import Wallmakeover from "./pages/Wallmakeover.jsx";
import Sofacleaning from "./pages/Sofacleaning.jsx";
import Salonpackages from "./pages/Salonpackages.jsx";
import SalonLuxe from "./Pages/Salonluxe.jsx";
import ViewCartPage from "./Pages/ViewCartPage.jsx";

// Other components
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

  // Routes where navbar or search should be hidden
const hideNavbarRoutes = ["/cart", "/view-cart", "/salon/luxe", "/bathroom-cleaning"];
  const hideSearchRoutes = ["/beauty", "/native", "/revamp"];

  // Current path, lowercase & trailing slash removed
  const currentPath = location.pathname.replace(/\/$/, "").toLowerCase();
  const shouldHideNavbar = hideNavbarRoutes.includes(currentPath);
  const shouldHideSearch = hideSearchRoutes.includes(currentPath);

  return (
    <>
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Load" element={<Load />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/revamp" element={<Revamp />} />
        <Route path="/native" element={<Native />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        <Route path="/salon/luxe" element={<SalonLuxe cart={cart} setCart={setCart} />} />
        <Route path="/wallmakeover" element={<Wallmakeover />} />
        <Route path="/sofacleaning" element={<Sofacleaning />} />
        <Route path="/salonpackages" element={<Salonpackages />} />
        <Route path="/view-cart" element={<ViewCartPage />} />

        {/* Other component routes */}
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
