import React from "react";
import ContactForm from "../components/ContactForm";
import "./styles.css";

function ContactUsPage() {
    return (
        <>
            <div className="contact-page">
                <div className="emailinfo">
                    <h2>Email us at</h2>
                    <a href="mailto:info@sanisecurities.com.np">
                        <p>info@sanisecurities.com.np</p>
                    </a>
                </div>
                <div className="phoneinfo">
                    <h2>Call us at our call center</h2>
                    <a href="tel:+977-01-5970602">
                        <p>+977-01-5970602</p>
                    </a>
                </div>
                <div className="head-office">
                    <h2>Head Office</h2>
                    <p>Laxman Babu Bhawan, Naxal, Kathmandu, Nepal</p>
                    <p>Contact Person: Rajan Shrestha</p>
                    <p>Contact Number: 9801104874</p>
                    <p>Email: info@sanisecurities.com.np</p>
                    <p>Call Center: +977-01-5970602</p>
                </div>

                <h2>Our Branch Offices</h2>
                <div className="branch-offices">
                    <br />
                    <div className="branch">
                        <h3>Saheed Chowk, Narayangarh, Chitwan</h3>
                        <p>Contact Person: Dina Nath Bhatta</p>
                        <p>
                            Contact Number: 9801988688 / 9801988686 / 9801104883
                        </p>
                        <p>Email: ujjwal@sanisecurities.com.np</p>
                        <p>Landline Number: 056-596272 / 596233</p>
                    </div>
                    <div className="branch">
                        <h3>Devchuli-13, Daldale, Nawalpur</h3>
                        <p>Contact Person: Pawan Poudel</p>
                        <p>Contact Number: 9801988683 / 9801184696</p>
                        <p>Email: daldale@sanisecurities.com.np</p>
                        <p>Landline Number: 078-590533</p>
                    </div>
                    <div className="branch">
                        <h3>New Road-9, Pokhara, Kaski</h3>
                        <p>Contact Person: Bikash Adhikari</p>
                        <p>Contact Number: 9802853404</p>
                        <p>Email: pokhara@sanisecurities.com.np</p>
                        <p>Landline Number: 061-591505</p>
                    </div>
                </div>
            </div>
            <ContactForm />
        </>
    );
}

export default ContactUsPage;
