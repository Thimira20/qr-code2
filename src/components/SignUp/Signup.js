import React from "react";
import "./signup.css";

function Signup({ closeSignupModal }) {
  const handleOutsideClick = (event) => {
    if (event.target.id === "id01") {
      closeSignupModal();
    }
  };

  return (
    <div id="id01" className="modal" onClick={handleOutsideClick}>
      <span onClick={closeSignupModal} className="close" title="Close Modal">
        &times;
      </span>

      <form className="modal-content animate" action="/action_page.php">
        <div className="imgcontainer">
          <img
            src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            alt="Avatar"
            className="avatar"
          />
        </div>

        <div className="container">
          <label className="label" htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
            className="inputUsername"
          />
          <label className="label" htmlFor="uname">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            className="inputUsername"
          />

          <label className="label" htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            className="inputPassword"
          />

          <button className="loginBtn" type="submit">
            Signup
          </button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
        </div>

        <button type="button" onClick={closeSignupModal} className="cancelbtn">
          Cancel
        </button>
      </form>
    </div>
  );
}

export default Signup;
