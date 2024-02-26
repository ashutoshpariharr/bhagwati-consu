// AnimationNav.jsx
import React, { useState } from "react";
import "./AnimationNav.css";
import Nav from "./Nav";

const AnimationNav = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  return (
    <>
      <div className="button" onClick={toggleActive}>
        <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
      </div>

      {isActive && <Nav />}
    </>
  );
};

export default AnimationNav;
