import React from 'react'
import './brand.css';
import landing22 from '../../assets/landing22.svg'
const Brand = () => {
    return (
        <div className="fyp__brand section__padding gradient__bg">
            <div className="fyp__brand-image">
                <img src={landing22} />
            </div>
            <div className='fyp__brand-content'>
                <p>Leave behind the traditional styling methods and 
                switch to  our , </p>
                <h2>AI Stylist</h2> <p>today ! </p>
            </div>
            
        </div>
       
    )
}

export default Brand


