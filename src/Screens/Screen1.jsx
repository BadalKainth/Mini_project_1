import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/Image.png";
import "./Screen1.css";

function Screen1() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    navigate("/thank-you");
  }

  return (
    <>
      <main>
        <div className="screen1">
          <div className="container-info">
            <h1>An inspiring design delivered to your inbox every morning!</h1>
            <p className="main-para">
              Our team scouts the internet for the best designs, illustrations
              and art and delivers a truly inspiring one every day to your
              inbox.
            </p>
            <strong className="strong-text">Show me how it looks..</strong>
            <form className="register-form" onSubmit={handleSubmit}>
              <input
                className="email-input"
                type="email"
                required
                placeholder="Your e-mail address"
              />
              <button role="submit" className="register-btn">
                Register Now
              </button>
            </form>
          </div>
          <div className="container-image">
            <img src={image} alt="Image1" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Screen1;
