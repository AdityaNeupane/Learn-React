import React from 'react'
// import './ContactUs.css'
import { Link, Outlet } from 'react-router-dom'
const ContactUs = () => {
  return (
    <>
    <div>i am contact</div>
    <br></br>
    <h1>
      Contact
    </h1>
   <br></br>
    <h1><Link to="user/1">user1</Link></h1>
    <h1><Link to="user/2">user2</Link></h1>
    <h1><Link to="user/3">user3</Link></h1>
    <h1><Link to="user/4">user4</Link></h1>
    <h1><Link to="user/5">user5</Link></h1>
    
    <Outlet/>


  
    {/* <div className="contact-us">
      <section className="contact-intro">
        <h1>Contact Us</h1>
        <p>We would love to hear from you! Reach out to us for any queries or assistance.</p>
      </section>

      <section className="contact-details">
        <div className="contact-info">
          <h3>Our Office</h3>
          <p>1234 IT Park, Tech City</p>
          <p>Email: contact@itcompany.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div> */}
   

    </>
  )
}

export default ContactUs