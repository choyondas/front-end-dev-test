import React from 'react';
import './Benefits.css';
import ben1 from '../../images/benefits/Passive Income Sq.png';
import ben2 from '../../images/benefits/Events Sq.png';
import ben3 from '../../images/benefits/Vacation Stays Sq.png';
import ben4 from '../../images/benefits/Mint Pass Sq.png';


// added animation

import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';

const Benefits = () => {
    return (
        <div className="benefits" id='benefits'>
            <div className="contentDiv">
                <h2>Benefits</h2>

                <div className="benefitsDiv">
                    <div className="benefitsItem">
                        <Flip top duration={2000} >
          <img src={ben1} alt="" />
        </Flip>


                        
                        
                        <Slide bottom duration={3000}>
          <p>
                            Passive income through monthly preferred returns (6-8% depending on rarity of NFT), as well as a share of all OpenSea royalties (depending on rarity of NFT).
                        </p>
        </Slide>
                        
                    </div>
                    <div className="benefitsItem">
                         <Flip bottm duration={3000} >
          <img src={ben2} alt="" />
        </Flip>
                        <Slide bottom duration={3500}>
          <p>
                            Access to exclusive events, PPB branded merchandise, and more
                        </p>
        </Slide>
                        
                    </div>
                    <div className="benefitsItem">
                         <Flip top duration={4000} >
          <img src={ben3} alt="" />
        </Flip>
                        <Slide bottom duration={4000}>
          <p>
                            Mint pass for future PPB collections
                        </p>
        </Slide>
                    </div>
                    <div className="benefitsItem">
                         <Flip bottom duration={2500} >
          <img src={ben4} alt="" />
                        </Flip>
                        
                         <Slide bottom duration={5000}>
          <p>
                            Mint pass for future PPB collections
                        </p>
        </Slide>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;