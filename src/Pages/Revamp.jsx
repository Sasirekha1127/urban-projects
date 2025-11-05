import React, { useEffect, useState } from "react";
import "./Revamp.css";

export default function RevampPage({ setHideNavbar }) {   
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    setHideNavbar(true);

    const timer = setTimeout(() => {
      setLoading(false);
      setHideNavbar(false); 
    }, 2000);

    return () => clearTimeout(timer);
  }, [setHideNavbar]);

  return (
    <div className="revamp-container">
      {loading ? (
        <div className="spinner">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      ) : (
        <h1>Welcome to Revamp Page</h1>
      )}
    </div>
  );
}
