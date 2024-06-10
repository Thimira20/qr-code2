import React, { useRef, useState } from "react";
import "./genarator.css";
import QrCodeIcon from "@mui/icons-material/QrCode";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image";
function Genarator(props) {
  const [value, setValue] = useState();
  const [size, setSize] = useState(300);
  const [animate, setAnimate] = useState(false);
  const [qrColor, setQrColor] = useState("#ffffff"); // Default color is black
  const customColors = [
    "#ffffff",
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#fa2dfa",
    "#00FFFF",
    "purple",
    "orange",
  ];

  //setAnimation use to avoid animation repeating when click the genarate

  //const qr = document.getElementById(".qrBox");

  // const downloadBtn = function () {
  //   setTimeout(() => {
  //     const saveUrl = qr.querySelector("svg").xmlns;
  //     createSaveBtn(saveUrl);
  //   }, 50);
  // };
  // const createSaveBtn = function (saveUrl) {
  //   const link = document.createElement("a");
  //   link.id = "savelink";
  //   link.classList = "delButton";
  //   link.href = saveUrl;
  //   link.download = "qrcode";
  //   link.innerHTML = "Download";
  //   document.getElementById("genaratorBoxBottom").appendChild(link);
  // };
  const qrRef = useRef();

  function showDownload() {
    if (value === "") {
      alert("Please give your Input");
    } else {
      if (!animate) {
        setAnimate(true);
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

          link.addEventListener("click", (animate) => {
            setAnimate(!animate);
          });
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

  const g = document.getElementById("genBtn");
  const genrated = function () {
    setTimeout(() => {
      g.innerHTML = "Genrated";
    }, 1900);
    g.innerHTML = "Genrating...";
    console.log("correct");
  };
  const notGenrated = function () {
    g.innerHTML = "Genrate";
    console.log("incorrect");
  };

  function handleClick() {
    g.classList.add("genrating"); // Add the "clicked" class to change color
    setTimeout(() => {
      g.classList.remove("genrating"); // Remove the "clicked" class after a delay
    }, 1900);
  }

  // Add event listener to the button

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
                setAnimate(false);

                notGenrated();
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
                setAnimate(false);
                notGenrated();
              }}
            >
              <option value="100">100x100</option>
              <option value="200">200x200</option>
              <option value="300" defaultValue={300}>
                300x300
              </option>
              {/* <option value="400">400x400</option>
              <option value="500">500x500</option>
              <option value="600">600x600</option>
              <option value="700">700x700</option> */}
              {window.innerWidth > 500 && (
                <>
                  <option value="400">400x400</option>
                  <option value="500">500x500</option>
                  <option value="600">600x600</option>
                  <option value="700">700x700</option>
                </>
              )}
            </select>
          </div>
          <div className="colorBox">
            {customColors.map((color) => (
              <button
                key={color}
                className="colorButton"
                style={{ backgroundColor: color }}
                onClick={() => setQrColor(color)}
              />
            ))}
          </div>
        </div>

        <div className="buttonBox">
          <button
            onClick={() => {
              showDownload();
              handleClick();
              genrated();
            }}
            className="genButton"
            id="genBtn"
          >
            Genarate
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
              bgColor={qrColor}
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
