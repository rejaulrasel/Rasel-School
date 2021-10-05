import React from 'react';
import './OurTeam.css'
import img1 from './players/player-1.png'
import img2 from './players/player-2.png'
import img3 from './players/player-3.png'
import img4 from './players/player-4.png'
import img5 from './players/player-5.png'
import img6 from './players/player-6.png'
const OurTeam = () => {
    return (
        <div className='team'>
            <div className="members">
                <div className="member">
                    <img src={img1} alt="" />
                    <h3>Haris Hashin</h3>
                    <h4>Senior web Developer</h4>
                </div>
                <div className="member">
                    <img src={img2} alt="" />
                    <h3>Hamid Abdullah</h3>
                    <h4>Product Manager</h4>
                </div>
                <div className="member">
                    <img src={img3} alt="" />
                    <h3>Bryabn Seils</h3>
                    <h4>SEO Expert</h4>
                </div>
                <div className="member">
                    <img src={img4} alt="" />
                    <h3>Peter Poll</h3>
                    <h4>Graphics Designer</h4>
                </div>
                <div className="member">
                    <img src={img5} alt="" />
                    <h3>Abdur Rahman</h3>
                    <h4>Social media Manager</h4>
                </div>
                <div className="member">
                    <img src={img6} alt="" />
                    <h3>Shakib Raihan</h3>
                    <h4>Marketing Manager</h4>
                </div>

            </div>
        </div>
    );
};

export default OurTeam;