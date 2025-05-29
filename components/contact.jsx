import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import '@fortawesome/fontawesome-free/css/all.css';

const Contact = () => {
    const [showButton, setShowButton] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [successMessage, setSuccessMessage] = useState(false); // State for success popup

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
    
        // Map formData to match the placeholders in your EmailJS template
        const templateParams = {
            title: formData.name, // Map "title" to the "name" field
            email: formData.email,
            message: formData.message,
        };
    
        emailjs
            .send(
                'service_9ba0urv', // Replace with your EmailJS Service ID
                'template_gauhvke', // Replace with your EmailJS Template ID
                templateParams,     // Pass the mapped template parameters
                'zZvNP0ejMOExAsSTs'   // Replace with your EmailJS Public Key
            )
            .then(
                (result) => {
                    setSuccessMessage(true); // Show success message
                    setTimeout(() => setSuccessMessage(false), 3000); // Hide after 3 seconds
                    setFormData({ name: '', email: '', message: '' }); // Reset form
                },
                (error) => {
                    alert('Failed to send message. Please try again.');
                }
            );
    };

    return (
        <div>
            <div className="contact-section" id="contact">
                <h2>Contact Us</h2>
                <div className="contact-container">
                    <div className="contact-details">
                        <p>
                            <strong>Address:</strong> 21, Adigun street, Agbado Ijaiye, Lagos state.
                        </p>
                        <p>
                            <strong>Email:</strong>{" "}
                            Elitescollege586@gmail.com
                        </p>
                        <p>
                            <strong>Phone:</strong> +234 8053835963, +234 8133478247<br />
                            <strong>WhatsApp:</strong> +234 8090533172
                        </p>
                    </div>
                    <div className="contact-map">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.1234567890123!2d3.2950208!3d6.6718191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b977eecc80a4b%3A0x7b269d1323137b8d!2sElites%20College%20Ojokoro!5e0!3m2!1sen!2sng!4v1681234567890!5m2!1sen!2sng"
        width="100%"
        height={300}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
    ></iframe>
</div>
                </div>
            </div>
            <form id="contact-form" onSubmit={sendEmail}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Send</button>
            </form>
            {successMessage && (
                <div className="success-popup">
                    <p>Message sent successfully!</p>
                </div>
            )}
            {showButton && (
                <button id="back-to-top" className="back-to-top" onClick={scrollToTop}>
                    ↑
                </button>
            )}
            <div className="social-media-section">
                <h2>Follow Us</h2>
                <div className="social-icons">
                    <a href="https://facebook.com/profile.php?id=100086995879928" target="_blank" className="social-icon">
                        <i className="fab fa-facebook-f" />
                    </a>
                   
                    <a href="https://www.instagram.com/elitescollege21/" target="_blank" className="social-icon">
                        <i className="fab fa-instagram" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;