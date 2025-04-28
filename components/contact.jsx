import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

const Contact = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling effect
        });
    };

    return (
        <div>
            <div className="contact-section" id="contact">
                <h2>Contact Us</h2>
                <div className="contact-container">
                    <div className="contact-details">
                        <p>
                            <strong>Address:</strong> 123 Elite College Road, Lagos, Nigeria
                        </p>
                        <p>
                            <strong>Email:</strong>{" "}
                            <a href="mailto:support@example.com">support@example.com</a>
                        </p>
                        <p>
                            <strong>Phone:</strong> +234 XXX XXXX XXX
                        </p>
                    </div>
                    <div className="contact-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.9630579153169!3d-37.81410797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8b8f8f8f8f8!2sElite%20College!5e0!3m2!1sen!2sng!4v1610000000000!5m2!1sen!2sng"
                            width="100%"
                            height={300}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
            <form id="contact-form" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required=""
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required=""
                />
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    required=""
                    defaultValue={""}
                />
                <button type="submit">Send</button>
            </form>
            {showButton && (
                <button id="back-to-top" className="back-to-top" onClick={scrollToTop}>
                    ↑
                </button>
            )}
            <div className="social-media-section">
                <h2>Follow Us</h2>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" className="social-icon">
                        <i className="fab fa-facebook-f" />
                    </a>
                    <a href="https://twitter.com" target="_blank" className="social-icon">
                        <i className="fab fa-twitter" />
                    </a>
                    <a href="https://instagram.com" target="_blank" className="social-icon">
                        <i className="fab fa-instagram" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" className="social-icon">
                        <i className="fab fa-linkedin-in" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;