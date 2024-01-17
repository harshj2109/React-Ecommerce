import React from 'react'
import './Css/Contact.css'
const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-head">
        Feel Free To Contact Us
      </h2>
      <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14320.043100282444!2d78.13285661236326!3d26.196327761359278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5be4fccf877%3A0xc8c9acbd3138b2e!2sMANISH%20PAATNI%20A-3%20SAMADHIYA%20COLONY!5e0!3m2!1sen!2sin!4v1703964585461!5m2!1sen!2sin" width="100%" height="400" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className='form-section' >
        <form action="https://formspree.io/f/xdoqoazq" method='POST' className="contact-form">
          <input type="text" name="name" id="" placeholder='Enter your name' required  autoComplete=''/>
          <input type="email" name="email" id="" placeholder='Enter your email' required autoComplete=''/>
          <input type="text" name="Message" id="" placeholder='Enter Your Message For Us' required autoComplete='' />

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact