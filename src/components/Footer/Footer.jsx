import React from 'react'
import './Footer.scss'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Footer = () => {


    return (
      <footer className="footer">
        <div className="container">
          <div className="contact">
            <h1 className='page-title'>Contact</h1>
             <ul className='contact-list'>
                <li className='contact-list__item'>
                    <h3>Phone</h3>
                    <a href="tel:+499999999999">+49 999 999 99 99</a>
                </li>
                <li className='contact-list__item'>
                    <h3>Socials</h3>
                    <div className="social-icons">
                        <Link to="https://www.instagram.com/">
                          <FaInstagram />
                        </Link>
                        <Link to="https://web.whatsapp.com/">
                          <FaWhatsapp />
                        </Link>
                        </div>
                </li>

                <li className='contact-list__item'>
                    <h3>Address</h3>
                    <p>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
                </li>
                <li className='contact-list__item'>
                    <h3>Working Hours</h3>
                    <p>24 hours a day</p>
                </li>
              </ul>
                   
            <div className="map">
               <iframe className='map__styles'
                 title="google_map"
                 src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9713.636886541603!2d13.3750447!3d52.5079329!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sde!4v1704283318371!5m2!1sen!2sde"
                 allowFullScreen=""
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"/>
            </div>
          </div>
        </div>

    </footer >
    )
}

export default Footer;
