import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../componentWrapper/ContentWrapper";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div className="socialIcons">
          <a
            href="https://www.facebook.com/niteshsingh.bisht.319/"
            target="_blank"
          >
            <span className="icon">
              <FaFacebookF />
            </span>
          </a>
          <a
            href="https://www.instagram.com/nitesh_singh_bisht_/"
            target="_blank"
          >
            <span className="icon">
              <FaInstagram />
            </span>
          </a>
          <a href="" target="_blank">
            <span className="icon">
              <FaTwitter />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/nitesh-singh-bisht/"
            target="_blank"
          >
            <span className="icon">
              <FaLinkedin />
            </span>
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
