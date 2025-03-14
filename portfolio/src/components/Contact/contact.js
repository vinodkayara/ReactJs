import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import twitterIcon from '../../assets/twitter.png';
import instagramIcon from '../../assets/instagram.png';
import githubIcon from '../Contact/github.png';
import linkedinIcon from '../Contact/linkedin.png';
import React from 'react';

const Contact = () => {
    return (
        <div id='contactPage'>
            {/* Clients Section */}
            <div id="clients">
                <h1 className="contactPageTitle">My Projects</h1>
                <span className="clientDesc">
                    I have had the opportunity to work with a diverse group of companies. 
                    Some of the notable companies I have worked with include:
                </span>
                <div className="clientImgs">
                    <img src={Walmart} alt="Walmart" className="clientImg" />
                    <img src={Adobe} alt="Adobe" className="clientImg" />
                    <img src={Microsoft} alt="Microsoft" className="clientImg" />
                    <img src={Facebook} alt="Facebook" className="clientImg" />                   
                </div>
            </div>

            {/* Contact Section */}
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                
                {/* Contact Details */}
                <div className="contactDetails" style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <p>Email: <a href="mailto:vinodkayara181818@gmail.com">vinodkayara181818@gmail.com</a></p>
                    <p>Phone: <a href="tel:+918431715839">+91-8431715839</a></p>
                </div>

                {/* Social Media Links */}
                <div className="links" style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px' }}>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="Twitter" className="link" />
                    </a>
                    <a href="https://instagram.com/vinod.kayara" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="Instagram" className="link" />
                    </a>
                    <a href="https://github.com/vinodkayara" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub" className="link" />
                    </a>
                    <a href="https://www.linkedin.com/in/vinod-kayara-51983b293" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn" className="link" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
