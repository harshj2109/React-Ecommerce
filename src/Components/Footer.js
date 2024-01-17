import React from 'react'
import '../Css/Footer.css'
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-content">
            <div className="footer-box">
                <h4>TrendsCart</h4>
                <p>India's No. 1 <br /> Ecommerce Platform</p>
            </div>
            <hr />

            <div className="footer-box box-2">
                <h4>Subscribe to get <br /> important updates</h4>
                <form action="https://formspree.io/f/mnqeqpvb" method='POST'>
                    <input type="email" name="email" id="" placeholder='Email Address' required />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
            <hr />

            <div className="footer-box">
                <h4>Follow Us</h4>

                <div className="follow-icon">
                    
                    <div className="follow-logo">
                    <a href=''><SlSocialInstagram className='app-icons' /></a>
                    </div>

                    <div className="follow-logo">
                    <a href=''><TiSocialLinkedin className='app-icons' /></a>
                    </div>
                
                </div>
            </div>
            <hr />

            <div className="footer-box box-4">
                <h4>Call Us</h4>
                <p><a href='tel:6269361329'>6269361329</a></p>
            </div>
        </div>
    </div>
  )
}

export default Footer