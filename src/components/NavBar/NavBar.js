import React from "react";
import "./navBar.css";

function NavBar(props) {
  return (
    <div className="navBarBox">
      <div className="navBarBoxLeft">
        <p className="easy">easy</p>
        <p className="qr">QR</p>
      </div>
      <div className="navBarBoxCenter"></div>
      <div className="navBarBoxRight ">
        <button className="navButton">Home</button>
        <button className="navButton">Steps</button>
        <button className="navButton">Genarate</button>
        <button className="navButton">Contact</button>
      </div>
      <div className="navBarBoxCenter"></div>
    </div>
  );
}

export default NavBar;
