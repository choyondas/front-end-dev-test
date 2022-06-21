import React from 'react';
import './Footer.css';
import logoF from '../../images/banner/whitegreenLockup.png';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { GiSailboat } from 'react-icons/gi';




import Slide from 'react-reveal/Slide';

const Footer = () => {
    return (
        <div className='footer' id="footer">
            

             <Slide bottom  duration={4000}>
          <div className="footerDiv">
                <div className="footerClass">
                    <img src={logoF}alt="" />
                </div>
                <div className="footerClass">
                    <ul>
                        <li> <a href="#banner">About</a> </li>
                        <li> <a href="#team">Team</a> </li>
                        <li> <a href="#benefits">Benefits</a> </li>
                        <li> <a href="#faqs">FAQs</a> </li>
                        <li> <a href="#roadmap">Roadmap</a> </li>
                        <li> <a href="#shop">Shop</a> </li>
                        
                    </ul>
                </div>
                <div className="contactNavigation">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/choyon-das-002a82201/"> <span><FaLinkedinIn/></span> </a></li>
                        <li><a href="https://www.linkedin.com/in/choyon-das-002a82201/"> <span><FaTwitter/></span> </a></li>
                        <li><a href="https://www.linkedin.com/in/choyon-das-002a82201/"> <span><FaInstagram/></span> </a></li>
                        <li><a href="https://www.linkedin.com/in/choyon-das-002a82201/"><span> <GiSailboat/> </span></a></li>
                    </ul>
                </div>
            </div>
        </Slide>

             <Slide bottom duration={7000}>
          <div className="copyright">
                <p>© 2022 - Passive Piggy Banks - All rights reserved. </p>

            </div>
        </Slide>
            
        </div>
    );
};

export default Footer;