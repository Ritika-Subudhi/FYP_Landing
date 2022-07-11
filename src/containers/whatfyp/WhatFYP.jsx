import React from 'react'
//import { Feature } from '../../components'
import PP1 from '../../assets/PP1.svg';
import PP2 from '../../assets/PP2.svg';
import PP3 from '../../assets/PP3.svg';

import './whatfyp.css'
const WhatFYP = () => {
    return (
        <div className="fyp__whatfyp section__margin" id="wfyp">
            <div className="whatfyp-getstart">
                <h1>To get started...</h1>
            </div>
            <div className="shaded-div"></div>
            <div className="fyp__whatfyp-heading">
                <h4>Gather your clothes</h4>
                <div className="fyp__whatfyp-image">
                    <img src={PP1} />
                </div>
            </div>

            <div className="fyp__whatfyp-heading2">
                <div className="fyp__whatfyp-image2">
                    <img src={PP2} />
                </div>
                <h4>Our application puts together all your clothes into one place</h4>
            </div>

            <div className="fyp__whatfyp-heading1">
                <h4>Rock your look, every day!</h4>
                <div className="fyp__whatfyp-image1">
                    <img src={PP3} />
                </div>
            </div>

        </div>
        
    )
}

export default WhatFYP
