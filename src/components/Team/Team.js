import React from 'react';
import './Team.css';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { GiSailboat } from 'react-icons/gi';
import img1 from '../../images/pig/1.png';

const Team = () => {
    return (
        <div className="team">
            <div className="teamItem contentDiv">
                <h2>The Team</h2>
                <div className="itemCardRow">
                    <div className="itemCardCol">
                        <img src={img1} alt="" />
                        <h3>Muadin</h3>
                        <p>Co-Founder</p>
                        <div className="iconteam">
                            <ul>
                        <li><a href=""> <span><FaLinkedinIn/></span> </a></li>
                        <li><a href=""> <span><FaTwitter/></span> </a></li>
                        <li><a href=""> <span><FaInstagram/></span> </a></li>
                       
                    </ul>
                         </div>
                    </div>
                    <div className="itemCardCol">
                        <img src={img1} alt="" />
                        <h3>Muadin</h3>
                        <p>Co-Founder</p>
                        <div className="iconteam">
                            <ul>
                        <li><a href=""> <span><FaLinkedinIn/></span> </a></li>
                        <li><a href=""> <span><FaTwitter/></span> </a></li>
                        <li><a href=""> <span><FaInstagram/></span> </a></li>
                       
                    </ul>
                         </div>
                    </div>
                    <div className="itemCardCol">
                        <img src={img1} alt="" />
                        <h3>Muadin</h3>
                        <p>Co-Founder</p>
                        <div className="iconteam">
                            <ul>
                        <li><a href=""> <span><FaLinkedinIn/></span> </a></li>
                        <li><a href=""> <span><FaTwitter/></span> </a></li>
                        <li><a href=""> <span><FaInstagram/></span> </a></li>
                       
                    </ul>
                         </div>
                    </div>
                    <div className="itemCardCol">
                        <img src={img1} alt="" />
                        <h3>Muadin</h3>
                        <p>Co-Founder</p>
                        <div className="iconteam">
                            <ul>
                        <li><a href=""> <span><FaLinkedinIn/></span> </a></li>
                        <li><a href=""> <span><FaTwitter/></span> </a></li>
                        <li><a href=""> <span><FaInstagram/></span> </a></li>
                       
                    </ul>
                         </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Team;