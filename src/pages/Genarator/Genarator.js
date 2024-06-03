import React from "react";
import "./genarator.css";
import QrCodeIcon from "@mui/icons-material/QrCode";

function Genarator(props) {
  return (
    <div className="genaratorBox">
      <div className="genaratorBoxTop">
        <p className="genTopic">Genrate Yor Own QR</p>
      </div>
      <div className="genaratorBoxUp">
        <div className="spacingBox"></div>
        <div className="inputBox">
          <QrCodeIcon className="qrIcon" />
          <input placeholder="Paste your link here" className="qrInput" />
        </div>
        <div className="buttonBox">
          <button className="genButton">Genarate</button>
        </div>
        <div className="spacingBox"></div>
      </div>
      <div className="genaratorBoxDown">
        <div className="qrBox">
          <img src="/images/qr-codeHome.png" alt="" className="qrImage" />
        </div>
      </div>
      <div className="genaratorBoxBottom">
        <button className="genButton">Download</button>
      </div>
    </div>
  );
}

export default Genarator;
