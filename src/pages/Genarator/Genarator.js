import React from "react";
import "./genarator.css";
import QrCodeIcon from "@mui/icons-material/QrCode";

function Genarator(props) {
  const form = document.getElementById("generate-form");
  const qr = document.getElementById("qrcode");

  const onGenarateSubmit = (e) => {
    e.preventDefault();
    clearUI();
    const url = document.getElementById("url").value;
    const size = document.getElementById("size").value;

    if (url === "") {
      alert("Please enter a valid URL");
    } else {
      showSpinner();

      setTimeout(() => {
        hideSpinner();
        generateQRCode(url, size);
        setTimeout(() => {
          const saveUrl = qr.querySelector("img").src;
          createSaveBtn(saveUrl);
        }, 50);
      }, 1000);
    }
  };

  const generateQRCode = (url, size) => {
    const qrcode = new QRCode("qrcode", {
      text: url,
      width: size,
      height: size,
    });
  };

  const showSpinner = function () {
    document.getElementById("spinner").style.display = "block";
  };

  const hideSpinner = function () {
    document.getElementById("spinner").style.display = "none";
  };

  const clearUI = function () {
    qr.innerHTML = "";
    const saveBtn = document.getElementById("savelink");
    if (saveBtn) {
      saveBtn.remove();
    }
  };

  const createSaveBtn = function (saveUrl) {
    const link = document.createElement("a");
    link.id = "savelink";
    link.classList = "download-btn";
    link.href = saveUrl;
    link.download = "qrcode";
    link.innerHTML = "Save Image";
    document.getElementById("generated").appendChild(link);
  };

  hideSpinner();

  form.addEventListener("submit", onGenarateSubmit);

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
            <input placeholder="Paste your link here" className="qrInput" />
          </div>
          <div className="sizeBox">
            <select class="selected" name="size" id="size">
              <option value="100">100x100</option>
              <option value="200">200x200</option>
              <option value="300" selected>
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
          <button className="genButton">Genarate</button>
        </div>
        <div className="spacingBox"></div>
      </div>
      <div className="genaratorBoxDown">
        <div className="qrBox">
          <img src="" alt="" className="qrImage" />
        </div>
      </div>
      <div className="genaratorBoxBottom">
        <button className="genButton">Download</button>
      </div>
    </div>
  );
}

export default Genarator;
