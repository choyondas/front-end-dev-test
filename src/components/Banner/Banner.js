import React from 'react';
import './Banner.css';
import pig1 from '../../images/banner/image 3.png';
import pig2 from '../../images/banner/image 2.png';
import pig3 from '../../images/banner/image 1.png';

import Bounce from 'react-reveal/Bounce';

import Fade from 'react-reveal/Fade';

import Nav from '../Nav/Nav';

import Rotate from 'react-reveal/Rotate';


const Banner = () => {

   

    return (
        <div className="banner" id='banner'>
            <div className="contentDiv">
                
                 <Fade top duration={3000}>
          <Nav/>
        </Fade>



                <div className="content">
                    
                    <Fade left>
          <h2>
                    An exclusive collection of 1.000 unique non-fungible ERC-721 tokens (NFTs)
                </h2>
        </Fade>
                
                    
                    
                    <Rotate bottom left>
          <p>
                        Passive Piggy Banks (PPB) is an exclusive collection of 1,000 unique non-fungible ERC-721 tokens (NFTs) on the Ethereum blockchain that provide holders with passive income through real estate investments, royalties, and more.

                    </p>
        </Rotate>
            </div>
            </div>
            <div className="pigs">

                  <Bounce top duration={3000}>
           <img className='pig1' src={pig1} alt="" />
        </Bounce>
                  <Bounce top duration={3500}>
           <img className='pig2' src={pig2} alt="" />
        </Bounce>
                  <Bounce top duration={4000}>
           <img className='pig3' src={pig3} alt="" />
        </Bounce>
               
            
            </div>

            
        </div>
    );
};

export default Banner;