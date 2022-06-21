import React from 'react';
import './Banner.css';
import pig1 from '../../images/banner/image 3.png';
import pig2 from '../../images/banner/image 2.png';
import pig3 from '../../images/banner/image 1.png';



import Nav from '../Nav/Nav';


const Banner = () => {

   

    return (
        <div className="banner">
            <div className="contentDiv">
                <Nav/>
                



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