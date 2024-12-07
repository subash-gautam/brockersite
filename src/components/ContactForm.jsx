import { React, useState } from "react";
import "./style.css";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [errors, setErrors] = useState({}); // For validation errors

    const validateForm = () => {
        const newErrors = {};

        if (name.length < 5) {
            newErrors.name = "Name must be at least 5 characters long.";
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for valid email
        if (!emailPattern.test(email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (message.trim() === "") {
            newErrors.message = "Message cannot be empty.";
        }

        if (!isChecked) {
            newErrors.checkbox = "You must agree to the terms to submit.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log("Form submitted successfully:", {
                name,
                email,
                message,
            });
        } else {
            console.log("Form contains errors.");
        }
    };

    return (
        <>
            <hr />
            <br />
            <h1>Contact Form</h1>
            <p>
                Please fill up the form below. We will reply you back as soon as
                possible.
            </p>
            <form action="" method="post" onSubmit={handleSubmit}>
                {/* Name Field */}
                <label htmlFor="name">
                    Name: &nbsp;
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                {errors.name && <p className="error">{errors.name}</p>}

                {/* Email Field */}
                <label htmlFor="email">
                    Email: &nbsp;
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                {errors.email && <p className="error">{errors.email}</p>}

                {/* Message Field */}
                <label htmlFor="message" className="textmessage">
                    Message: &nbsp;
                    <textarea
                        name="message"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>
                {errors.message && <p className="error">{errors.message}</p>}

                {/* Checkbox Field */}
                <label htmlFor="agreement">
                    <input
                        type="checkbox"
                        name="agreement"
                        id="agreement"
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                    />
                    I give permission to collect the data above and use it to
                    contact me.
                </label>
                {errors.checkbox && <p className="error">{errors.checkbox}</p>}

                {/* Submit Button */}
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default ContactForm;
