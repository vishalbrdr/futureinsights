import React from "react";
import {
  FaRegClock,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "../styles/Call.css";

function Call() {
  return (
    <div className="animated-bg text-white">
      <div className="call">
        <p>
          <FaRegClock /> 9:00AM - 7:00PM Mon-Sat
        </p>
        <p>
          <FaPhoneAlt />{" "}
          <a href="tel:91 8310507489">91 8310507489 For Queries</a>
        </p>
      </div>
      <ul className="socials">
        <li>
          <a href="#nowhere">
            {" "}
            <FaFacebookF />{" "}
          </a>
        </li>
        <li>
          <a href="#nowhere">
            {" "}
            <FaInstagram />{" "}
          </a>
        </li>
        <li>
          <a href="#nowhere">
            {" "}
            <FaLinkedinIn />{" "}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Call;
