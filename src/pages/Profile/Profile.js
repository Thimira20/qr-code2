import React from "react";
import "./profile.css";
import TitlebarBelowImageList from "../../components/ImageList";

function Profile(props) {
  return (
    <div className="profileBox">
      <div className="top">Hi User</div>
      <div className="bottom">
        <div className="left">
          <TitlebarBelowImageList />
          {/* <div className="leftTop">
            <img
              src="https://www.ncsc.gov.uk/images/QR-IMAGE.png"
              alt=""
              className="savedImage"
            />
          </div>
          <div className="leftBottom">
            <div className="qrName">Name : http://localhost:3000/qr-code2 </div>
          </div> */}
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default Profile;
