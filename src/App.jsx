// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppContent from "./Router.jsx"; 

export default function App() {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [hideSearch, setHideSearch] = useState(false);

  return (
    <Router>
      <AppContent
        setHideNavbar={setHideNavbar}
        hideNavbar={hideNavbar}
        hideSearch={hideSearch}
        setHideSearch={setHideSearch}
      />
    </Router>
  );
}
