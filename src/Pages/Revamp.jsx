import React, { useEffect, useState } from "react";
import "./Revamp.css";

export default function RevampPage({ setHideNavbar }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide navbar when loading starts
    if (setHideNavbar) setHideNavbar(true);

    const timer = setTimeout(() => {
      setLoading(false);
      if (setHideNavbar) setHideNavbar(false);
    }, 2000); // 2 seconds spinner

    return () => clearTimeout(timer);
  }, [setHideNavbar]);

  return (
    <div className="revamp-container">
      {loading ? (
        <div className="spinner">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <p className="loading-text">Loading Revamp Page...</p>
        </div>
      ) : (
        <h1> Welcome to Revamp Page </h1>
      )}
    </div>
  );
}
