import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  // State
  const [index, setIndex] = useState(0);
  const {name,job,image,text} = people[index];


  // Functions
  const checkNumber = (number) => {
    number = number > people.length - 1 ? 0 : number < 0 ? people.length - 1 : number
    return number
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  }
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex);
    });
  }

  const randomPerson = () => {
    let randomArrayNumber = Math.round(Math.random() * people.length)
    if (randomArrayNumber === index ) {
      randomArrayNumber = checkNumber(index + 1)
    } 
    setIndex(checkNumber(randomArrayNumber));
  }


  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight /> 
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
        <button className="random-btn" onClick={randomPerson} >Surprise Me</button>
      </div>
    </article>
  );
};

export default Review;
