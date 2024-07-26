import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-item">
        <div className="shop-conitaner">
          <div className="online-shop">
            <h4> ONLINE SHOPPING</h4>
            <p>Men</p>
            <p>women</p>
            <p>Kids</p>
          </div>
          <div className="cutomer-policy">
            <h4> CUSTOMER POLICIES</h4>

            <div>
              <p>Contact Us</p>
              <p>Shippin</p>
              <p>Tracking Order</p>
            </div>
          </div>
        </div>
        <div className="footer-icons">
          <h4>KEEP IN TOUCH</h4>

          <span>
            <FacebookIcon />
          </span>

          <span>
            <InstagramIcon />
          </span>
          <span>
            <YouTubeIcon />
          </span>
          <span>
            <TwitterIcon />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
