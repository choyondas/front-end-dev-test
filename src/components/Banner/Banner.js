import React from 'react';
import './Banner.css';
import pig1 from '../../images/banner/image 3.png';
import pig2 from '../../images/banner/image 2.png';
import pig3 from '../../images/banner/image 1.png';
import logo from '../../images/banner/whitegreenLockup.png';

import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { GiSailboat } from 'react-icons/gi';
const Banner = () => {
    return (
        <div className="banner">
            <div className="contentDiv">
                 <nav>
            <div className="logo"><img src={logo} alt="" /></div>
                <div className="mainNav">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#benefits">Benefits</a></li>
                        <li><a href="#roadmap">Roadmap</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#faqs">FAQs</a></li>
                        <li><a href="#shop">Shop</a></li>
                    </ul>
                </div>
                <div className="contactNav">
                    <ul>
                        <li><a href=""> <span><FaLinkedinIn/></span> </a></li>
                        <li><a href=""> <span><FaTwitter/></span> </a></li>
                        <li><a href=""> <span><FaInstagram/></span> </a></li>
                        <li><a href=""><span> <GiSailboat/> </span></a></li>
                    </ul>
                    <button className="mint">Mint now</button>
                </div>
            </nav>




            <div className="content">
                <h2>
                    An exclusive collection of 1.000 unique non-fungible ERC-721 tokens (NFTs)
                </h2>
                    <p>
                        Passive Piggy Banks (PPB) is an exclusive collection of 1,000 unique non-fungible ERC-721 tokens (NFTs) on the Ethereum blockchain that provide holders with passive income through real estate investments, royalties, and more.

                </p>
            </div>
            </div>
            <div className="pigs">
                <img className='pig1' src={pig1} alt="" />
                <img className='pig2' src={pig2} alt="" />
                <img className='pig3' src={pig3} alt="" />
            </div>
        </div>
    );
};

export default Banner;