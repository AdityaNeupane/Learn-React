import React from 'react'
import './Services.css'
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
          <img src="path-to-service1.jpg" alt="Service 1" />
          <h3>Web Development</h3>
          <p>We build scalable and efficient web applications tailored to your business needs.</p>
        </div>
        <div className="service">
          <img src="path-to-service2.jpg" alt="Service 2" />
          <h3>Mobile App Development</h3>
          <p>Our team creates user-friendly mobile apps for both iOS and Android platforms.</p>
        </div>
        <div className="service">
          <img src="path-to-service3.jpg" alt="Service 3" />
          <h3>Cloud Solutions</h3>
          <p>Optimize your business operations with our secure and reliable cloud services.</p>
        </div>
        <div className="service">
          <img src="path-to-service4.jpg" alt="Service 4" />
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
