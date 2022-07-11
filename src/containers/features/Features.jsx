import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Research Motivation',
    text: 'Significant time and effort is required to keep track of fashion sense. Some seek professional help but not everyone can afford personal stylists. These stylists are quite expensive and they cannot aid with their help day and night.AI stylist programs can help users to be efficient about storing descriptions of user’s items and be more organized.',
  },
  {
    title: 'Problem Statement',
    text: 'The idea is to build a simple and easy-to-use AI wardrobe which can recognize clothes (color, style, type, etc). Additionally, to build an ML model for automatic categorization of fashion apparel.',
  },
  {
    title: 'Future Scope',
    text: 'E-commerce websites can use such models for automating the categorization of fashion apparel.Chatbot for interacting with the user and suggesting outfits based on the user’s preferences. Implementing a recommendation system based on the features extracted.',
  },
];

const Features = () => (
  <div className="fyp__features section__padding" id="features">
    <div className="fyp__features-heading">
      <h1 className="gradient__text">AI Wardrobe is the future and you just need to realize it. Find out more about our idea ...</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="fyp__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
