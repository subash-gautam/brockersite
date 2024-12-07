import React from "react";
import ContactForm from "../components/ContactForm";
import Service from "../components/Service";

function HomePage() {
    return (
        <>
            <h1 className="firsth1">Welcome to Sani Securities..</h1>
            <h3>
                Start your journey to economic freedom with trusted brokerage
                services.
            </h3>
            <br />
            <hr />
            <br />
            <h1>Our Services</h1>
            <div className="our-services">
                <Service
                    title="Online TMS Services"
                    description="Our Online TMS makes trading easy and efficient with real-time
                market access, secure transactions and advanced order
                management."
                />
                <Service
                    title="Depository Services"
                    description="We provide trustworthy depository services that
                        guarantee the secure storage and maintenance of your
                        securities, giving you confidence regarding your
                        financial assets."
                />
                <Service
                    title="Mero Share service"
                    description="With MeroShare, you can easily manage your Demat
                        account, apply for IPOs and monitor your investments
                        online."
                />
            </div>
            <ContactForm />
        </>
    );
}

export default HomePage;
