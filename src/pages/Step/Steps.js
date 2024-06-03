import React from "react";
import "./step.css";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

function Steps(props) {
  return (
    <div className="stepBox">
      <div className="stepBoxTop">
        <p className="stepTopic">Follow the Following Steps</p>
      </div>
      <div className="stepBoxBottom">
        <div className="bottomLeft">
          <div className="stepsList">
            <span className="stepText">Paste your link </span>

            <button className="stepButton">
              +
              <DoubleArrowIcon className="stepIcon" />
            </button>
          </div>
          <div className="stepsList">
            <span className="stepText">Click the "Genarate"</span>

            <button className="stepButton">
              <DoubleArrowIcon className="stepIcon" />
            </button>
          </div>
          <div className="stepsList">
            <span className="stepText">Download your QR code</span>

            <button className="stepButton">
              <DoubleArrowIcon className="stepIcon" />
            </button>
          </div>
        </div>
        <div className="bottomRight">
          <div className="imageBox">
            <img src="/images/qr-codeHome.png" alt="" className="rightImage" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
