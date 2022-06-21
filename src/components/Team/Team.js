import React from 'react';
import './Team.css';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { GiSailboat } from 'react-icons/gi';
import img1 from '../../images/pig/1.png';
import img2 from '../../images/pig/2.png';
import img3 from '../../images/pig/3.png';
import img4 from '../../images/pig/4.png';

//animation animations

import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

const Team = () => {
    return (
        <div className="team" id='team'>
            <div className="teamItem contentDiv">
                
                <Zoom top duration={4000}>
          <h2>The Team</h2>
        </Zoom>
                <div className="itemCardRow">


                     <Slide top duration={2000}>
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
                    </Slide>
                    <Slide bottom duration={3000}>
          <div className="itemCardCol">
                        <img src={img2} alt="" />
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
        </Slide>
                    
                     <Slide top duration={5000}>
          <div className="itemCardCol">
                        <img src={img3} alt="" />
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
        </Slide>
                    <Slide bottom duration={5500}>
         <div className="itemCardCol">
                        <img src={img4} alt="" />
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
        </Slide>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Team;