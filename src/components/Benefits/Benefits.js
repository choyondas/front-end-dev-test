import React from 'react';
import './Benefits.css';
import ben1 from '../../images/benefits/Passive Income Sq.png';
import ben2 from '../../images/benefits/Events Sq.png';
import ben3 from '../../images/benefits/Vacation Stays Sq.png';
import ben4 from '../../images/benefits/Mint Pass Sq.png';

const Benefits = () => {
    return (
        <div className="benefits">
            <div className="contentDiv">
                <h2>Benefits</h2>

                <div className="benefitsDiv">
                    <div className="benefitsItem">
                        <img src={ben1} alt="" />
                        <p>
                            Passive income through monthly preferred returns (6-8% depending on rarity of NFT), as well as a share of all OpenSea royalties (depending on rarity of NFT).
                        </p>
                    </div>
                    <div className="benefitsItem">
                        <img src={ben2} alt="" />
                        <p>
                            Access to exclusive events, PPB branded merchandise, and more
                        </p>
                    </div>
                    <div className="benefitsItem">
                        <img src={ben3} alt="" />
                        <p>
                            Free vacation stays at PPB properties
                        </p>
                    </div>
                    <div className="benefitsItem">
                        <img src={ben4} alt="" />
                        <p>
                            Mint pass for future PPB collections
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;