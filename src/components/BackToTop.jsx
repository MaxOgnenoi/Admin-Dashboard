import React, { useEffect, useState } from "react";
import "./backToTop.css";

function BackToTop() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);
  return <div></div>;
}

export default BackToTop;
