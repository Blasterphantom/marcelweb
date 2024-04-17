import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../About/About.css';

export default function About() {
  return (
    <div className='aboutMe'>
        <div className="overlay"></div>
        <h1 className='titleAbout'>ABOUT ME</h1>
        <h2 className='subTitleAbout'>My Story</h2>
        <div className='paragraphAboutDiv'>
            <p className='paragraphAbout'>Since a young age, I have always been fascinated with computers. Knowing that I wanted to contribute to the world with the knowledge that I had, I decided to major in computer science at a university to better get a taste of what the tech world could offer. College was educational, however it still felt like I could learn more, so I took my leave for the moment. <br/><br/> Now I have enrolled in CodeStack Academy, which is a fast pace software engineering program that helps get one prepared for the jobs available in the real world. Here, I have learned so much more that I could've hoped for. While juggling school and a full time job at Dominos, I have become a junior software engineer ready to apply for internships and job opportunities.</p>
        </div>
    </div>
  )
}
