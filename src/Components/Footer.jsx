import React from "react";
import "./footer.scss";
import footerLogo from "./../images/footer.png";
import SendIcon from "@mui/icons-material/Send";
import faceIcon from "./../images/facebook.png";
import instaIcon from "./../images/insta.png";
import linkedIcon from "./../images/linkedin.png";
import twitterIcon from "./../images/twitter.png";
import cashIcon from "./../images/cash.png";
import visaIcon from "./../images/visa.png";
import masterIcon from "./../images/master.png";
import nasnavIcon from "./../images/nasnav.png";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "#3C3C3B", margin: "auto", padding: "30px 0" }}
    >
      <div className="row" id="footerTop">
        <div className="col-sm no-padding">
          <img src={footerLogo} alt="" style={{ marginBottom: "25px" }} />
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. <br></br>
            <br></br>Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia{" "}
            <br></br>
            <br></br>m nonummy nibh euismod tincidunt ut laoreet dolore magna
            aliquam erat volutpat. Ut wisi enim ad minim veniam
          </p>
        </div>
        <div className="col-sm no-padding">
          <h5>Subscribe to our newsletter</h5>
          <div className="input-group" style={{ marginBottom: "20px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Mail"
              aria-label="Enter Your Mail"
              aria-describedby="btnGroupAddon"
            />
            <button
              className="input-group-text"
              id="btnGroupAddon"
              style={{ backgroundColor: "#FFF200", fontWeight: "bold" }}
            >
              Subscribe
              <SendIcon />
            </button>
          </div>
          <div className="d-flex justify-content-between">
            <div className="footerList">
              <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Track Order</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Sell With Us</li>
                <li>Shipping And Returns</li>
              </ul>
            </div>
            <div className="footerSocial">
              <li>
                <img src={faceIcon} alt="" /> /YESHTERY
              </li>
              <li>
                <img src={linkedIcon} alt="" /> /YESHTERY
              </li>
              <li>
                <img src={instaIcon} alt="" /> /YESHTERY
              </li>
              <li>
                <img src={twitterIcon} alt="" /> /YESHTERY
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="row" id="footerBottom">
        <div className="col-sm no-padding">
          © 2021 yeshtery, all rights reserved.
        </div>
        <div className="col-sm no-padding" style={{ textAlign: "center" }}>
          <img src={cashIcon} alt="" /> <img src={visaIcon} alt="" />{" "}
          <img src={masterIcon} alt="" />
        </div>
        <div className="col-sm no-padding" style={{ textAlign: "right" }}>
          Powered By <img src={nasnavIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
