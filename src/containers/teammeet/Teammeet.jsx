import React from 'react';
import Article from '../../components/article/Article';
import { TM1, TM2, TM3, TM4 } from './imports';
import './teammeet.css'
const Teammeet = () => (
  <div className="fyp__tm section__padding" id="teammeet">
    <div className="fyp__tm-heading">
      <h1 className="gradient__text">Meet the Team.</h1>
    </div>
    <div className="fyp__tm-container">
        <div className="fyp__tm-container_groupB">
        <Article imgUrl={TM1} date="Front End Developer" text="Khushi Dubey , CSE , NMIT" />
        <Article imgUrl={TM2} date="UI/UX and Front End Developer" text="Ritika Subudhi" />
        <Article imgUrl={TM3} date="Backend Developer" text="Simran Maurya" />
        <Article imgUrl={TM4} date="Lead Backend Developer and ML Expert" text="Mohammad Shadaab" />
      </div>
    </div>
  </div>
);

export default Teammeet;