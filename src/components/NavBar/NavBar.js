import React, { useState } from "react";
import "./navBar.css";

function NavBar(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleHomeClick = () => {
    document
      .getElementById("homeSection")
      .scrollIntoView({ behavior: "smooth" });
    setSidebarOpen(false);
  };

  const handleStepsClick = () => {
    document
      .getElementById("stepsSection")
      .scrollIntoView({ behavior: "smooth" });
    setSidebarOpen(false);
  };

  const handleGenerateClick = () => {
    document
      .getElementById("generatorSection")
      .scrollIntoView({ behavior: "smooth" });
    setSidebarOpen(false);
  };

  const handleContactClick = () => {
    document
      .getElementById("aboutUsSection")
      .scrollIntoView({ behavior: "smooth" });
    setSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <div className={`navBarBox ${sidebarOpen ? "hideNavBar" : ""}`}>
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
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="closeButton" onClick={toggleSidebar}>
          X
        </button>
        <button className="sidebarButton" onClick={handleHomeClick}>
          Home
        </button>
        <button className="sidebarButton" onClick={handleStepsClick}>
          Steps
        </button>
        <button className="sidebarButton" onClick={handleGenerateClick}>
          Generate
        </button>
        <button className="sidebarButton" onClick={handleContactClick}>
          Contact
        </button>
      </div>
      <button className="menuButton" onClick={toggleSidebar}>
        ☰
      </button>
    </div>
  );
}

export default NavBar;
