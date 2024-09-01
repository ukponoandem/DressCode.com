import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {  faHome, faUser, } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="contact">
                    <h3>Contact Us</h3>
                    <p>Phone: 123456789</p>
                    <p>Address: 29 Thomas Udoekong Streets, Atan Offot, Uyo, Akwa Ibom State</p>
                    <p >Email:<a href="/"> ukponoandem@gmail.com</a></p>
                </div>

                <div className="book-online">
                    <h3>Buy Now on DressCode</h3>
                    <p>Buyer safety center</p>
                    <p>FAQs</p>
                    <p>Delivery</p>
                    <p>Digital service</p>
                    <p>Bulk Purchase</p>
                </div>

                <div className="links">
                    <h3>Quick Links</h3>
                    <p><a href="/About">About Us</a></p>
                    <p><a href="/privacy">Privacy Policy</a></p>
                    <p><a href="/terms">Terms of Service</a></p>
                </div>

                <div className="newsletter">
                    <h3>Subscribe to Our Newsletter</h3>
                    <form>
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>

                <div className="social-media">
                    <h3>Follow Us On </h3>
                    <p><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></p>
                    <p><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} />Twitter</a></p>
                    <p><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} />Instagram</a></p>
                    <p><a href="https://FacebookMessenger.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookMessenger} />FacebookMessenger</a></p>
                    <p><a href="https://Whatsapp.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} />Whatsapp:09161248397</a></p>
                </div> 
              {/* <FontAwesomeIcon icon= {  faFacebook}/>  
          <FontAwesomeIcon icon={faHome}/>
 <FontAwesomeIcon icon={faUser} />   */}

            </div>
<p>Make your shopping Online on DressCode, We give you the best you desire..</p>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} dev Ukpono Andem. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;