import React from 'react'
import './AboutUs.css'
import person1 from '../assets/Images/person1.avif'
import person2 from '../assets/Images/person2.avif'
import person3 from '../assets/Images/person3.avif'
const AboutUs = () => {
  return (
     <>
     <button onClick={() => window.history.back()}>Go Back</button>
     {/* <button onClick={() => window.history.forward()}>Go Forward</button> */}
      <br></br>
    <div className="aboutus">
      <section className="about-intro">
        <h1>About Us</h1>
        <p>Learn more about our company, our mission, and the team that drives us forward.</p>
      </section>

      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>To provide innovative and reliable IT solutions that help businesses grow and succeed.</p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>To be a global leader in IT services, delivering top-notch technology solutions to clients worldwide.</p>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team">
          <div className="team-member">
            <img src= {person1} alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src={person2} alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Chief Technology Officer</p>
          </div>
          <div className="team-member">
            <img src={person3} alt="Team Member 3" />
            <h3>Mike Johnson</h3>
            <p>Lead Developer</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>
    </div>
 
     
     </>
  )
}

export default AboutUs
