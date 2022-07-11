import React from 'react';
import fypLogo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="fyp__footer section__padding">
    <div className="fyp__footer-heading">
      <h1 className="getgo">Go digital with your outfit planning , Today!</h1>
    </div>

    <div className="fyp__footer-links">
      <div className="fyp__footer-links_logo">
        <img src={fypLogo} alt="gpt3_logo" />
        <p>Bangalore India, <br /> All Rights Reserved</p>
      </div>
      <div className="fyp__footer-links_div">
        <h4>Links</h4>
        <p>Instagram - your_aiwardrobe</p>
        <p>Facebook - your_aiwardrobe</p>
        <p>Email us at - xyz@aiward.com</p>
        
      </div>
      <div className="fyp__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="fyp__footer-links_div">
        <h4>Get in touch</h4>
        <p>Bangalore, India</p>
        <p>080-84322839</p>
        </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 AI Wardrobe. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
