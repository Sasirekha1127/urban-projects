// Router.jsx
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// COMPONENTS
import NavbarUC from "./components/Navbar.jsx";
import CarouselPage from "./components/Carouselpage.jsx";
import Newnote from "./components/Newnote.jsx";
import Mostbook from "./components/Mostbook.jsx";
import Walls from "./components/Walls.jsx";
import Salon from "./components/Salon.jsx";
import Wallpannel from "./components/Wallpannel.jsx";
import CleaningPest from "./components/Cleaningpest.jsx";
import Wallpannels from "./components/Wallpannels.jsx";
import Salonmen from "./components/Salonmen.jsx";
import Wal from "./components/Wal.jsx";
import Homerepair from "./components/Homerepair.jsx";
import Load from "./components/Loading.jsx";

// PAGES PROPERLY IMPORTED
import Home from './pages/Home.jsx';
import Beauty from './pages/Beauty.jsx';
import Revamp from './pages/Revamp.jsx';
import Native from './pages/Native.jsx';
import BathroomCleaning from './pages/BathroomCleaning.jsx';
import CardPage from './pages/CardPage.jsx';
import Wallmakeover from "./pages/Wallmakeover.jsx";
import Sofacleaning from "./pages/Sofacleaning.jsx";
import Salonpackages from "./pages/Salonpackages.jsx";
import SalonPage from "./pages/SalonPage.jsx";
import Salonforwomen from "./pages/Salonforwomen.jsx";
import SalonLuxe from "./pages/Salonluxe.jsx";

export default function AppContent({
  setHideNavbar,
  hideNavbar,
  hideSearch,
  setHideSearch,
}) {
  const location = useLocation();

  // Routes where search box should hide
  const hideSearchRoutes = ["/beauty", "/native", "/revamp"];

  // Routes where navbar must hide
  const alwaysHideNavbarRoutes = ["/cart"];

  useEffect(() => {
    setHideSearch(hideSearchRoutes.includes(location.pathname));
    setHideNavbar(alwaysHideNavbarRoutes.includes(location.pathname));
  }, [location.pathname, setHideSearch, setHideNavbar]);

  const shouldHideNavbar =
    alwaysHideNavbarRoutes.includes(location.pathname) || hideNavbar;

  return (
    <>
      {/* NAVBAR (show only when allowed) */}
      {!shouldHideNavbar && <NavbarUC hideSearch={hideSearch} />}

      {/* APP ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Load" element={<Load />} />

        {/* BEAUTY */}
        <Route
          path="/beauty"
          element={
            <Beauty
              setHideNavbar={setHideNavbar}
              setHideSearch={setHideSearch}
            />
          }
        />
        <Route path="/salonforwomen" element={<Salonforwomen />} />

        {/* REVAMP */}
        <Route
          path="/revamp"
          element={
            <Revamp
              setHideNavbar={setHideNavbar}
              setHideSearch={setHideSearch}
            />
          }
        />

        {/* NATIVE */}
        <Route
          path="/native"
          element={
            <Native
              setHideNavbar={setHideNavbar}
              setHideSearch={setHideSearch}
            />
          }
        />

        {/* COMPONENT ROUTES */}
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


        {/* CLEANING SERVICES */}
        <Route path="/bathroom-cleaning" element={<BathroomCleaning />} />
        <Route
          path="/wallmakeover"
          element={<Wallmakeover setHideNavbar={setHideNavbar} />}
        />
        <Route
          path="/sofacleaning"
          element={<Sofacleaning setHideNavbar={setHideNavbar} />}
        />
        <Route
          path="/salonpackages"
          element={<Salonpackages setHideNavbar={setHideNavbar} />}
        />

        {/* pages */}
        <Route path="/salon/luxe" element={<SalonLuxe />} />


        {/* CART */}
        <Route path="/cart" element={<CardPage />} />
      </Routes>
    </>
  );
}
