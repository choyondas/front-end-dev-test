import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { GiSailboat } from 'react-icons/gi';
import { AiOutlineBars } from 'react-icons/ai';
import { GiCrossedBones } from 'react-icons/gi';
import { useRef } from 'react';
import './Nav.css';
import logo from '../../images/banner/whitegreenLockup.png';
const Nav = () => {
     const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
            <h3><img src={logo} alt="" /></h3>
            <nav ref={navRef} >
                <a href="#about">About</a>
                <a href="#benefits">Benefits</a>
                <a href="#roadmap">Roadmap</a>
                <a href="#team">Team</a>
                <a href="#faqs">FAQs</a>
                <a href="#shop">Shop</a>

                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    
                    <GiCrossedBones/>

                </button>
                

            </nav>
            <div className="social">
                <a href="#shop"><FaLinkedinIn/></a>
                <a href="#shop"><FaTwitter/></a>
                <a href="#shop"><FaInstagram /></a>
                <a href="#shop"><GiSailboat /></a>
                <button className="ming">
                    Mint now
                </button>
            </div>


            <button className='nav-btn ' onClick={showNavbar}>
                    <AiOutlineBars />

                </button>
       </header>
    );
};

export default Nav;