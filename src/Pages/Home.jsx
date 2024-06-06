import React from 'react'
import Navbar from '../Components/Navbar'
import './Home.css'

const Home = () => {
  return (
    <>
    
    <div className="homepage">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our IT Company</h1>
          <p>Your trusted partner in technology solutions</p>
          <button className="cta-button">Get Started</button>
        </div>
        <img src="path-to-your-hero-image.jpg" alt="Hero Image" className="hero-image" />
      </header>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services">
          <div className="service">
            <img src="path-to-your-service1-image.jpg" alt="Service 1" />
            <h3>Service 1</h3>
            <p>Description of Service 1</p>
          </div>
          <div className="service">
            <img src="path-to-your-service2-image.jpg" alt="Service 2" />
            <h3>Service 2</h3>
            <p>Description of Service 2</p>
          </div>
          <div className="service">
            <img src="path-to-your-service3-image.jpg" alt="Service 3" />
            <h3>Service 3</h3>
            <p>Description of Service 3</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>About Us</h2>
        <div className="about-content">
          <img src="path-to-your-about-image.jpg" alt="About Us" className="about-image" />
          <div className="about-text">
            <p>Information about your IT company, its mission, vision, and values.</p>
            <button className="cta-button">Learn More</button>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Get in touch with us for any queries or support.</p>
        <button className="cta-button">Contact</button>
      </section>
    </div>

    
    </>
  )
}

export default Home
