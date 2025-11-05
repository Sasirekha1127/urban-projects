import React, { useEffect, useState } from "react";
import "./beauty.css";

function Beauty({ setHideNavbar }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide navbar during loading
    setHideNavbar(true);

    const timer = setTimeout(() => {
      setLoading(false);
      setHideNavbar(false); // Show navbar after loading
    }, 2000);

    return () => {
      clearTimeout(timer);
      setHideNavbar(false);
    };
  }, [setHideNavbar]);

  return (
    <div className="beauty-container">
      {loading ? (
        <div className="spinner">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      ) : (
        <h2>Welcome to Beauty Services </h2>
      )}
    </div>
  );
}

export default Beauty;
