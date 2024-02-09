// Footer Component
import React from "react";
import './Footer.css';

function Footer() {
    return (
        <div className="Footer_Content">
            <small className="Footer_Name">Emily L. </small>
            <small className="Footer_Year">&copy;{new Date().getFullYear()}</small>
        </div>
    );
}

export default Footer;
