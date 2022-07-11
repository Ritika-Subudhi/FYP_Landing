import React from 'react'
import './header.css'
import person from '../../assets/person.svg';
const Header = () => {
    return (
        <div className="fyp__header section__padding" id="home">
            <div className="fyp__header-content">
                <h1 className="gradient__text">Fashion is the armor to survive the reality of everyday life!</h1>
                <p>Let us help you, dress better ...</p>
                <div className="fyp__header-content__input">
                    <input type="email" placeholder="Your Email Address" />
                    <button type="button">Get Started</button>
                </div>   
            </div>
            <div className="fyp__header-image">
                <img src={person} />
            </div>
        </div>
    )
}

export default Header
