import React, { useRef, useState } from "react";
import "./genarator.css";
import QrCodeIcon from "@mui/icons-material/QrCode";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image";
import axios from "axios";
import { getCurrentUser } from "../../services/authService";
function Genarator(props) {
  let currentUser = getCurrentUser();
  const [value, setValue] = useState();
  const [size, setSize] = useState(300);
  const qrRef = useRef();

  const saveQrCode = async () => {
    if (qrRef.current) {
      toPng(qrRef.current)
        .then(async (dataUrl) => {
          const qrImageBase64 = dataUrl.split(",")[1]; // Extract base64 image
          const response = await axios.post(
            "http://localhost:3000/api/profile-data/save-qr-code",
            {
              userId: currentUser.id, // Assuming userId is passed as a prop
              qrText: value,
              qrImageBase64,
            }
          );

          alert(response.data.message);
        })
        .catch((err) => {
          console.error("Failed to save QR code:", err);
          console.log(currentUser.id);
        });
    }
  };

  function showDownload() {
    if (value === "") {
      alert("Please give your Input");
    } else {
      showSpinner();
      setTimeout(() => {
        hideSpinner();
        clearUI();
        const link = document.createElement("button");
        link.id = "downBtn";
        link.classList = "delButton";
        link.addEventListener("click", () => {
          downloadBtn();
          hideSpinner();
        });

        link.innerHTML = "Download";
        document.getElementById("downloadBox").appendChild(link);
      }, 2000);
    }
  }
  const clearUI = function () {
    const saveBtn = document.getElementById("downBtn");
    if (saveBtn) {
      saveBtn.remove();
    }
  };

  const downloadBtn = () => {
    if (qrRef.current) {
      toPng(qrRef.current)
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.classList = "delButton";
          link.download = "qr-code.png";
          link.innerHTML = "Download";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch((err) => {
          console.error("Failed to generate QR code image:", err);
        });
    }
  };
  const showSpinner = function () {
    document.getElementById("spinner").style.display = "block";
    document.getElementById("spinner").className = "loader";
  };

  const hideSpinner = function () {
    document.getElementById("spinner").style.display = "none";
  };

  return (
    <div className="genaratorBox">
      <div className="genaratorBoxTop">
        <p className="genTopic">Genrate Yor Own QR</p>
      </div>
      <div className="genaratorBoxUp">
        <div className="spacingBox"></div>
        <div className="urlSizeBox">
          <div className="inputBox">
            <QrCodeIcon className="qrIcon" />
            <input
              type="text"
              placeholder="Paste your link here"
              onChange={(e) => {
                setValue(e.target.value);
                clearUI();
              }}
              className="qrInput"
            />
          </div>
          <div className="sizeBox">
            <select
              className="selected"
              name="size"
              id="size"
              value={size}
              onChange={(e) => {
                setSize(parseInt(e.target.value === "" ? 0 : e.target.value));
                clearUI();
              }}
            >
              <option value="100">100x100</option>
              <option value="200">200x200</option>
              <option value="300" defaultValue={300}>
                300x300
              </option>
              <option value="400">400x400</option>
              <option value="500">500x500</option>
              <option value="600">600x600</option>
              <option value="700">700x700</option>
            </select>
          </div>
        </div>

        <div className="buttonBox">
          <button onClick={showDownload} className="genButton">
            Genarate
          </button>
          <button onClick={saveQrCode} className="genButton">
            Save
          </button>
        </div>
        <div className="spacingBox"></div>
      </div>
      <div className="genaratorBoxDown">
        <div className="qrBox" ref={qrRef}>
          {value && (
            <QRCode
              title="easyQR"
              value={value}
              bgColor={"#FFFFFF"}
              fgColor={"#000000"}
              size={size}
            />
          )}
        </div>
      </div>

      <div className="genaratorBoxBottom" id="downloadBox">
        <div className="" id="spinner"></div>
        {/* <button
          onClick={downloadBtn}
          id="downBtn"
          className="delButton"
        ></button> */}
      </div>
    </div>
  );
}

export default Genarator;
