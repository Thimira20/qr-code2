import React from "react";
import "./navBar.css";

function NavBar(props) {
  const handleHomeClick = () => {
    document
      .getElementById("homeSection")
      .scrollIntoView({ behavior: "smooth" });
  };

  const handleStepsClick = () => {
    document
      .getElementById("stepsSection")
      .scrollIntoView({ behavior: "smooth" });
  };

  const handleGenerateClick = () => {
    document
      .getElementById("generatorSection")
      .scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    document
      .getElementById("aboutUsSection")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="navBarBox">
      <div className="navBarBoxLeft">
        <p className="easy">easy</p>
        <p className="qr">QR</p>
      </div>
      <div className="navBarBoxCenter"></div>
      <div className="navBarBoxRight ">
        <button className="navButton" onClick={handleHomeClick}>
          Home
        </button>
        <button className="navButton" onClick={handleStepsClick}>
          Steps
        </button>
        <button className="navButton" onClick={handleGenerateClick}>
          Generate
        </button>
        <button className="navButton" onClick={handleContactClick}>
          Contact
        </button>
      </div>
    </div>
  );
}

export default NavBar;
