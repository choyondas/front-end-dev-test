import React from 'react';
import './RoadMap.css';
import {BsDot} from 'react-icons/bs'

import road from '../../images/roadmap/Group 3806.png';
const RoadMap = () => {
    return (
        <div className="roadmaps">
                <div className="contentDiv">
                <div className="roadItem">
                    <h2 className='roadtitle'>Roadmap</h2>

                    <div className="roadContent">
                        <div className="roadLeft">
                       

<table>

<tbody style ={{color:'white'}}>
<tr>
<td><h2>0%</h2></td>
<td className='dotIcon' style ={{width:"1px"}}><BsDot/></td>
<td><p> Minting goes live. Presale will go live 24 hours prior to the main sale.</p></td>

</tr>
<tr>
                                        <td><h2>20%</h2></td>
                                        <td className='dotIcon' style ={{width:"1px"}}><BsDot/></td>
<td>The PPB team will use funds raised to purchase real estate investments in our target
market</td>

</tr>
<tr>
                                        <td><h2>40%</h2></td>
                                        <td className='dotIcon' style ={{width:"1px"}}><BsDot/></td>
<td>PPB holders will begin receiving their PPB Coins that can be used to redeem Ethereum and
other rewards on our website. Rare and Legendary holders will receive monthly royalties
paid in PPB Coin from marketplace activity.</td>

</tr>
<tr>
                                        <td><h2>60%</h2></td>
                                        <td className='dotIcon' style ={{width:"1px"}}><BsDot/></td>
<td>PPB holders will begin receiving free vacation stays at PPB properties. These stays will be
randomly selected amongst all holders, with guaranteed stays for rare and legendary
holders.</td>

</tr>
<tr>
                                        <td><h2>80%</h2></td>
                                        <td className='dotIcon' style ={{width:"1px"}}><BsDot/></td>
<td>PPB holders will receive free access to events to meet the team and get insights on
operations.
</td>

</tr>
<tr>
                                        <td><h2>100%</h2></td>
                                        <td className='dotIcon' ><BsDot/></td>
        <td>Each PPB NFT will act as a mint pass for early access to all future PPB related projects or collections in different locations.</td>

</tr>


</tbody>
</table>
                            
                        </div>
                        <div className="roadRight">
                            <img src={road} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoadMap;