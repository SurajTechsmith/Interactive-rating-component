import React, { useState } from 'react';
import './App.css'; 
import star from "./images/icon-star.svg"
import thank from "./images/illustration-thank-you.svg"

const App = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    if (selectedRating !== null) {
      setSubmitted(true); 
      console.log(`Submitted rating: ${selectedRating}`);
    }
  };

  return (
    <div className="rating-container">
      {submitted ? ( 
        <div className="thank-you-container">
        <img src={thank} alt='thank-you-illustration' />
          <p className='thank-head'>You selected {selectedRating} out of 5</p>
          <p className='head'>Thank you!</p>
          <p className='para'>We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!</p>
        </div>
      ) : (
        
        <div className='rating-init'>
        <div className='star-con'><img src={star} alt='star-icon' /> </div>
        
          <p className='head'>How did we do?</p>
          <p className='para'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          <div className="rating-options">
            {[1, 2, 3, 4, 5].map((rating) => (
              <span
                key={rating}
                className={`rating-option ${selectedRating === rating ? 'selected' : ''}`}
                onClick={() => handleRatingClick(rating)}
              >
                {rating}
              </span>
            ))}
          </div>
          <button className="submit-button" onClick={handleSubmit}>Submit</button>
          </div>
        
      )}
    </div>
  );
};

export default App;
