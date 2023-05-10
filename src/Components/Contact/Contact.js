import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../Contact/Contact.css';

export default function Contact() {
  return (
    <div className='contactDiv'>
        <div className='infoDiv'>
            <h1 className='contactTitle'>Contact</h1>
            <p className='city'>Stockton, Ca</p>
            <p className='contactEmail'>marcelrodriguezcoding@gmail.com</p>
            <p className='contactEmail'>209-981-2090</p>
        </div>
        <div className='gomu'></div>
    </div>
  )
}
