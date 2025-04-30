import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons for light and dark mode

const AboutUs = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
      <section className="about-us" id="aboutus">
        <h2 className="section-title">Our Values</h2>
        <div className="values-container">
          <div className="value-card">
            <h3 className="value-title">Our Values</h3>
            <p className="value-description">
              Hard work, integrity, diligence, and all other godly virtues are our core values. We do not only teach our pupils, we develop in them godly virtues.
            </p>
          </div>
          <div className="value-card">
            <h3 className="value-title">Our Staff</h3>
            <p className="value-description">
              Our staff are dedicated and experienced in their core area of specialization. They are the reason behind the success of our students.
            </p>
          </div>
          <div className="value-card">
            <h3 className="value-title">Our Facilities</h3>
            <p className="value-description">
              Our classrooms are equipped with modern facilities. Our ICT room is also well equipped, fully air-conditioned with a functional e-library. We also have affordable hostel facilities.
            </p>
          </div>
        </div>
        <div className="image-grid">
          <div className="grid-item">
            <img src="/image/IMG_5606.jpg" alt="Our Founder" />
            <div className="grid-title">
              JOSEPH A. AKINWOLAOLA <br /> (FOUNDER)
            </div>
          </div>
          <div className="grid-item">
            <img src="/image/IMG_4451.png" alt="Our Students" />
            <div className="grid-title">Our Students</div>
          </div>
          <div className="grid-item">
            <img src="/image/IMG_4447.jpg" alt="Our Facilities" />
            <div className="grid-title">Facilities</div>
          </div>
        </div>
        <h3 className="test">Testimonial</h3>
        <div className="image-grid">
          <div className="grid-item">
            <img src="/image/IMG_COM_202504272302141691.jpg" alt="testimonials" />
            <div className="grid-title">From a Parent</div>
          </div>
          <div className="grid-item">
            <img src="/image/IMG_COM_202504272302139110.jpg" alt="Our Students" />
            <div className="grid-title">From a Student</div>
          </div>
          <div className="grid-item">
            <img src="/image/IMG_COM_202504272302142962.jpg" alt="Our Facilities" />
            <div className="grid-title">From a Student</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;