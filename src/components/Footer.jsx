import React from "react";
import logo from "../assets/logo.png";
import "./style.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-contents">
                <div className="footer-logo">
                    <img src={logo} alt="SANI Securities Logo" />
                    <p style={{ color: "white" }}>
                        SANI Securities Company Ltd. is one of the leading
                        Brokerage Firm for stock trading in Nepal. The company
                        received the license from the market regulator, Security
                        Board of Nepal (SEBON), and is the member of Nepal Stock
                        Exchange Ltd. (NEPSE).
                    </p>
                    <br />
                </div>
                <div className="quick-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/contact">Contact Us</a>
                        </li>
                        <li>
                            <a href="/login">Login</a>
                        </li>
                        <li>
                            <a href="https://nepalstock.com/">
                                Nepal Stock Exchange
                            </a>
                        </li>
                        <li>
                            <a href="https://cdsc.com.np/">CDSC</a>
                        </li>
                        <li>
                            <a href="https://sebon.gov.np/">SEBON</a>
                        </li>
                        <li>
                            <a href="https://register.sanisecurities.com.np/register">
                                Register
                            </a>
                        </li>
                    </ul>
                </div>
                <br />
            </div>
            <hr /> <br />
            <div className="footer-content">
                <div className="footer-copyright">
                    &copy; 2019 SANI Securities Limited. All Rights Reserved.
                </div>
                <div className="footer-links">
                    <a href="/">Terms</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Careers</a>
                </div>
            </div>
            <button className="back-to-top">
                <i className="fas fa-chevron-up"></i>
            </button>
        </footer>
    );
}

export default Footer;
