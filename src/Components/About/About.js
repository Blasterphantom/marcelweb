import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../About/About.css';

export default function About() {
  const [viewportDimensions, setViewportDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setViewportDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='aboutMe'>
        <div className="overlay"></div>
        <div className='infoDivAbout'>
        <h1 className='titleAbout'>ABOUT ME</h1>
        <h2 className='subTitleAbout'>My Story</h2>
        <div className='paragraphAboutDiv'>
          <p className='paragraphAbout'>
              Since a young age, I’ve always been fascinated by computers and how they work. Knowing that I wanted to contribute to the world using technology, I initially pursued a major in computer science. Although college provided a solid foundation, I realized there was much more to explore, so I decided to pursue learning on my own terms. <br/><br/>
              
              I enrolled in CodeStack Academy, a fast-paced software engineering program designed to prepare developers for real-world challenges. During this time, while balancing school and a full-time job, I grew into a junior software engineer with a hunger for real-world experience. <br/><br/>
              
              Now, I work as a web developer for Codestack, an organization under the San Joaquin Office of Education, where I contribute to nationwide systems using technologies like Angular, React, SQL, and Razor pages. My journey has given me both the technical skills and the passion needed to tackle complex problems, and I’m ready to embrace new opportunities in the field.
          </p>
        </div>
        </div>
    </div>
  )
}
