// src/Pages/Native.jsx
import React, { useEffect, useState } from "react";
import "./Native.css"; // we’ll create this next

export default function Native({ setHideNavbar }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setHideNavbar(true); // hide navbar during loading
    const timer = setTimeout(() => {
      setLoading(false);
      setHideNavbar(false); // show navbar after loading
    }, 2000);
    return () => clearTimeout(timer);
  }, [setHideNavbar]);

  return (
    <div className="native-container">
      {loading ? (
        <div className="spinner">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      ) : (
        <h1>Welcome to Native Page</h1>
      )}
    </div>
  );
}
