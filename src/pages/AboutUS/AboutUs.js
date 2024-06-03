import React from "react";
import "./aboutUs.css";
import QrCodeIcon from "@mui/icons-material/QrCode";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
function AboutUs(props) {
  return (
    <div className="aboutBox">
      <div className="aboutTop">
        <p className="aboutTopic">Contact</p>
      </div>
      <div className="aboutUp">top</div>
      <div className="aboutDown">
        <div className="leftHelpBar">
          <QrCodeIcon className="qrLogo" />
        </div>
        <div className="spacing"></div>
        <div className="rightHelpBar">
          <button className="helpButton">Home</button>
          <button className="helpButton">Steps</button>
          <button className="helpButton">Genarate</button>
        </div>
        <div className="spacing"></div>
      </div>
      <hr></hr>
      <div className="aboutBottom">
        <div className="aboutBottomLeft">
          <p className="copyright"> All rights reservered 2024</p>
        </div>
        <div className="aboutBottomRight">
          <InstagramIcon className="social" />
          <FacebookIcon className="social" />
          <LinkedInIcon className="social" />
          <GitHubIcon className="social" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
