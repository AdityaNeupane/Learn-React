import React from 'react'
import './Services.css'
import webdevelopment from '../assets/Images/webdevelopment.avif'
import mobileappdev from '../assets/Images/mobileappdev.avif'
import cloudstorage from '../assets/Images/cloudstorage.jpg'
import itconsult from '../assets/Images/Itconsult.avif'
const Services = () => {
  return (
     <>
     
    <div className="services">
      <section className="services-intro">
        <h1>Our Services</h1>
        <p>Explore the wide range of IT services we offer to help your business thrive.</p>
      </section>

      <section className="services-list">
        <div className="service">
          <img src={webdevelopment} alt="Service 1" />
          <h3>Web Development</h3>
          <p>We build scalable and efficient web applications tailored to your business needs.</p>
        </div>
        <div className="service">
          <img src={mobileappdev} alt="Service 2" />
          <h3>Mobile App Development</h3>
          <p>Our team creates user-friendly mobile apps for both iOS and Android platforms.</p>
        </div>
        <div className="service">
          <img src={cloudstorage} alt="Service 3" />
          <h3>Cloud Solutions</h3>
          <p>Optimize your business operations with our secure and reliable cloud services.</p>
        </div>
        <div className="service">
          <img src={itconsult} alt="Service 4" />
          <h3>IT Consulting</h3>
          <p>Get expert advice and strategies to solve your toughest IT challenges.</p>
        </div>
        {/* Add more services as needed */}
      </section>
    </div>
  

     
     </>
  )
}

export default Services
