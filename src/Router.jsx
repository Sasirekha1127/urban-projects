import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Components
import NavbarUC from "./components/Navbar.jsx";

// Pages
import Home from './pages/Home.jsx';
import Beauty from './pages/Beauty.jsx';
import Revamp from './pages/Revamp.jsx';
import Native from './pages/Native.jsx';
import BathroomCleaning from './pages/BathroomCleaning.jsx';
import CartPage from './Pages/CardPage.jsx';
import Wallmakeover from "./pages/Wallmakeover.jsx";
import Sofacleaning from "./pages/Sofacleaning.jsx";
import Salonpackages from "./pages/Salonpackages.jsx";
import SalonLuxe from "./Pages/Salonluxe.jsx";

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

export default function AppContent({
  setHideNavbar,
  hideNavbar,
  setHideSearch,
  hideSearch,
  cart,
  setCart,
}) {
  const location = useLocation();

  const hideSearchRoutes = ["/beauty", "/native", "/revamp"];
  const alwaysHideNavbarRoutes = ["/cart"];

  useEffect(() => {
    setHideSearch(hideSearchRoutes.includes(location.pathname));
    setHideNavbar(alwaysHideNavbarRoutes.includes(location.pathname));
  }, [location.pathname, setHideSearch, setHideNavbar]);

  const shouldHideNavbar =
    alwaysHideNavbarRoutes.includes(location.pathname) || hideNavbar;

  return (
    <>
      {!shouldHideNavbar && (
        <NavbarUC
          hideSearch={hideSearch}
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
        <Route path="/beauty" element={<Beauty setHideNavbar={setHideNavbar} setHideSearch={setHideSearch} />} />
        <Route path="/revamp" element={<Revamp setHideNavbar={setHideNavbar} setHideSearch={setHideSearch} />} />
        <Route path="/native" element={<Native setHideNavbar={setHideNavbar} setHideSearch={setHideSearch} />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        <Route path="/salon/luxe" element={<SalonLuxe cart={cart} setCart={setCart} />} />
        <Route path="/wallmakeover" element={<Wallmakeover setHideNavbar={setHideNavbar} />} />
        <Route path="/sofacleaning" element={<Sofacleaning setHideNavbar={setHideNavbar} />} />
        <Route path="/salonpackages" element={<Salonpackages setHideNavbar={setHideNavbar} />} />

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
        <Route path="/bathroom-cleaning" element={<BathroomCleaning />} />
      </Routes>
    </>
  );
}
