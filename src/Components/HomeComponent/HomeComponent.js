import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css';
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { Button, Row, Col, Card, CardBody } from 'react-bootstrap';
import pokemon from '../../Assets/pokemon.png';
import focusZoomed from '../../Assets/ProjectScreenshots/FOCUSLoginZoomed.png';
import Cahcc from '../../Assets/ProjectScreenshots/CahccHome.png';
import CalCareer from '../../Assets/ProjectScreenshots/CalCareerHome.png';
import Iecmhc from '../../Assets/ProjectScreenshots/IECMHCLogin.png';
import Serenity from '../../Assets/Serenity.png';
import Angular from '../../Assets/AngularLogo.png';
import BootstrapLogo from '../../Assets/BootstrapLogo.png';
import CLogo from '../../Assets/CLogo.png';
import css from '../../Assets/CssLogo.png';
import Html from '../../Assets/HtmlLogo.png';
import Js from '../../Assets/JavascriptLogo.png';
import ReactLogo from '../../Assets/ReactLogo.png';
import Sql from '../../Assets/SQLLogo.png';
import TailwindLogo from '../../Assets/TailwingLogo.png';
import Ts from '../../Assets/TypescriptLogo.png';
import Git from '../../Assets/GithubLogoBlack.png';
import Slack from '../../Assets/SlackLogo.png';
import Azure from '../../Assets/AzureLogo.png';
import Figma from '../../Assets/FigmaLogo.png';
import Jira from '../../Assets/Jira.png';
import Notion from '../../Assets/NotionLogo.png';
import Postman from '../../Assets/PostmanLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Typewriter({ textArray }) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (textArray.length === 0) return;

    const typingSpeed = 200; // Typing speed in milliseconds
    const backspaceSpeed = 100; // Backspace speed in milliseconds
    const pauseAfterTyping = 1500; // Pause after typing a word before backspacing in milliseconds
    const pauseBeforeNextWord = 1500; // Pause before typing next word

    const interval = setInterval(() => {
      if (isTyping) {
        if (displayText === textArray[index]) {
          setIsTyping(false);
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setTimeout(() => {
              setDisplayText('');
              setIndex((prevIndex) => (prevIndex === textArray.length - 1 ? 0 : prevIndex + 1));
              setIsTyping(true);
            }, pauseBeforeNextWord);
          }, pauseAfterTyping);
        } else {
          setDisplayText((prevText) => textArray[index].slice(0, prevText.length + 1));
        }
      } else {
        if (displayText !== '') {
          setTimeout(() => {
            setDisplayText((prevText) => prevText.slice(0, -1));
          }, backspaceSpeed); // Backspace speed
        }
      }
    }, isTyping ? typingSpeed : backspaceSpeed);

    // Clear interval when the component unmounts
    return () => clearInterval(interval);
  }, [index, textArray, displayText, isTyping]);

  return (
    <div className="typewriter-container">
      <h2 className='heroTxt2'>{displayText}</h2>
      <span className="blinking-cursor">|</span>
    </div>
  );
}

function handleCard1Click() {
  console.log('Card 1 clicked! modal in progress');
}

function handleCard2Click() {
  console.log('Card 2 clicked! modal in progress');
}

function handleCard3Click() {
  console.log('Card 3 clicked! modal in progress');
}

export default function HomeComponent() {
  let navigate = useNavigate();
  const [slider, setSlider] = useState(null);
  const [slider2, setSlider2] = useState(null);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: 0,
    slidesToShow: 3,
    speed: 500
  };

  const textArray = ['Software Engineer', 'Web Developer', 'Angular Developer', 'React Developer'];

  return (
    <Container className='homeContainer'>
      <div className='LuffyHome' >
        <h1 className='heroTxt'>Marcel Rodriguez</h1>
        <Typewriter textArray={textArray} />
      </div>

      <h2 className='portfolioTitle'>My Portfolio Showcase</h2>
      <p className='portfolioTxt'>Since beginning my journey in the software engineering field, my dedication to the work and motivation to grow have led me to exceptional projects and experiences. I'm grateful for a profession I'm passionate about, and am proud to share examples of my greatest work.</p>
      <h2 className='portfolioTitle'>Languages/Frameworks</h2>

      <div className='slider-container'>
        <Slider ref={setSlider} {...settings} className='langRow'>
          <div className='imgSlideCol'>
          <img className='logoSize' src={Html} alt='Html'/>
          <p className='imgTxt'>HTML</p>
          </div>
          <div className='imgSlideCol'>
          <img className='logoSize' src={css} alt='Css'/>
          <p className='imgTxt'>CSS</p>
          </div>
          <div className='imgSlideCol'>
          <img className='logoSize' src={Js} alt='Js'/>
          <p className='imgTxt'>Javascript</p>
          </div>
          <div className='imgSlideCol'>
          <img className='logoSize' src={Ts} alt='Ts'/>
          <p className='imgTxt'>Typescript</p>
          </div>
          <div className='imgSlideCol'>
          <img className='logoSize' src={BootstrapLogo} alt='Bootstrap'/>
          <p className='imgTxt'>Bootstrap</p>
          </div>
          <div className='imgSlideCol'>
          <img className='logoSize' src={TailwindLogo} alt='Tailwind'/>
          <p className='imgTxt'>TailwindCSS</p>
          </div>
          <div className='imgSlideCol'>
          <img className='logoSize' src={ReactLogo} alt='React'/>
          <p className='imgTxt'>React/Native</p>
          </div>
          <div className='imgSlideCol'>
          <img className='logoSize' src={Angular} alt='Angular'/>
          <p className='imgTxt'>Angular/Ionic</p>
          </div>
          <div className='imgSlideCol'>
          <img className='logoSize' src={CLogo} alt='C'/>
          <p className='imgTxt'>C#</p>
          </div>
          <div className='imgSlideCol'>
          <img className='logoSize' src={Sql} alt='Sql'/>
          <p className='imgTxt'>SQL</p>
          </div>
        </Slider>
        <button className='prevButton' onClick={() => slider.slickPrev()}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className='nextButton' onClick={() => slider.slickNext()}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <h2 className='portfolioTitle'>Productivity</h2>

        <div className='slider-container'>
          <Slider ref={setSlider2} {...settings} className='langRow'>
            <div className='imgSlideCol'>
            <img className='logoSize' src={Git} alt='Git'/>
            <p className='imgTxt'>Github</p>
            </div>
            <div className='imgSlideCol'>
            <img className='logoSize' src={Notion} alt='Notion'/>
            <p className='imgTxt'>Notion</p>
            </div>
            <div className='imgSlideCol'>
            <img className='logoSize' src={Slack} alt='Slack'/>
            <p className='imgTxt'>Slack</p>
            </div>
            <div className='imgSlideCol'>
            <img className='logoSize' src={Figma} alt='Figma'/>
            <p className='imgTxt'>Figma</p>
            </div>
            <div className='imgSlideCol'>
            <img className='logoSize' src={Jira} alt='Jira'/>
            <p className='imgTxt'>Jira</p>
            </div>
            <div className='imgSlideCol'>
            <img className='logoSize' src={Postman} alt='Postman'/>
            <p className='imgTxt'>Postman</p>
            </div>
            <div className='imgSlideCol'>
            <img className='logoSize' src={Azure} alt='Azure'/>
            <p className='imgTxt'>Azure</p>
            </div>
          </Slider>
          <button className='prevButton' onClick={() => slider2.slickPrev()}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className='nextButton' onClick={() => slider2.slickNext()}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

      <Row className='rowLearn'>
        <Button className='learnMoreBtn' onClick={ () => {navigate("About")}}>Learn More</Button>
      </Row>

      <Row className='projectTitleRow'>
        <h1 className='projectTitleText'>Projects</h1>
      </Row>

      <Row className='projectDiv'>
        <Col className='projectCol'>
          <Card className='projectCard' onClick={handleCard1Click}>
            <img className='SerenityPic card-img-top shortest-image' src={Serenity} alt='Serenity' />
            <CardBody>
              <div>
                <h1 className='pokeTitle center'>Serenity</h1>
                <p className='pokeLanguage'><strong>Front End</strong>: React - Typescript, HTML, CSS</p>
                <p className='pokeLanguage'><strong>Back End</strong>: C#, SQL on Azure</p>
                <p className='pokePara'>Mental health app built on React with typescript that helps a user with mental health by providing resources and daily check ins with a journaling feature. 3 person team with contributions including map functionality and database tables. Google maps API and Spotify API implemented.</p>
              </div>
              <div className='btn-link-div'>
                <Button className='buttonTxt' href='https://serenityhealth.vercel.app/' target='_blank' rel="noopener noreferrer">Project</Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col className='projectCol'>
          <Card className='projectCard' onClick={handleCard2Click}>
            <img className='weatherPic card-img-top' src={focusZoomed} alt='focusLogin' />
            <CardBody>
              <div>
                <h1 className='weatherTitle center'>FOCUS App</h1>
                <p className='pokeLanguage'><strong>Front End</strong>: Angular - Typescript, HTML, SCSS</p>
                <p className='weatherPara'>This application is built on Angular with Typescript and uses tables anf forms to allow first responders to make and review reports of student crisis incidents. Login Functionality with different levels of user access and permissions. Internship Project built by team of fellow colleagues.</p>
              </div>
              <div className='btn-link-div'>
                <Button className='buttonTxt' disabled={true} href='https://rodriguezmweatherreact.azurewebsites.net/' target='_blank' rel="noopener noreferrer">Project</Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col className='projectCol'>
          <Card className='projectCard' onClick={handleCard3Click}>
            <img className='pokemonPic card-img-top' src={pokemon} alt='pokemon' />
            <CardBody>
              <div>
                <h1 className='pokeTitle center'>Pokemon API</h1>
                <p className='pokeLanguage'><strong>Front End</strong>: React - Javascript, HTML, CSS</p>
                <p className='pokePara'>This application uses a pokemon api to search any pokemon based off of name and returns the pokemon’s sprite along with info such as moves, location, and abilities. Can also favorite pokemon. Project was built with Tailwind and Javascript, and later rebuilt in React. All information and pictures are fetched with an api on search, and use states are implemented for changing data.</p>
              </div>
              <div className='btn-link-div'>
                <Button className='buttonTxt' href='https://pokereact-theta.vercel.app/' target='_blank' rel="noopener noreferrer">Project</Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col className='projectCol'>
          <Card className='projectCard' onClick={handleCard3Click}>
            <img className='pokemonPic card-img-top' src={Cahcc} alt='Cahcc' />
            <CardBody>
              <div>
                <h1 className='pokeTitle center'>California Hispanic Chambers of Commerce</h1>
                <p className='pokeLanguage'><strong>Front End</strong>: Angular - Typescript, HTML, SCSS</p>
                <p className='pokeLanguage'><strong>Back End</strong>: C#, SQL on Azure</p>
                <p className='pokePara'>The California Hispanic Chambers of Commerce (Cahcc) is a website used to share events and information to the community. Built on Angular, the interface includes a public side and an admin side implementing a CMS for the clients to update information dynamically. Worked on updating the CMS form uploads and editing the style of the public side.</p>
              </div>
              <div className='btn-link-div'>
                <Button className='buttonTxt' href='https://www.cahcc.com/' target='_blank' rel="noopener noreferrer">Project</Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col className='projectCol'>
          <Card className='projectCard' onClick={handleCard3Click}>
            <img className='pokemonPic card-img-top' src={CalCareer} alt='Cal Career' />
            <CardBody>
              <div>
                <h1 className='pokeTitle center'>California Career Center</h1>
                <p className='pokeLanguage'><strong>Front End</strong>: Angular - Typescript, HTML, SCSS</p>
                <p className='pokeLanguage'><strong>Back End</strong>: C#, SQL on Azure</p>
                <p className='pokePara'>The California Career Center application	is used by students and educators in order to prepare incoming workforce personal for the application process. Built on Angular, the interface includes a public side and an admin side implementing a CMS for the clients to update information dynamically. Worked on Implementing form interceptors to confirm unsaved changes, update form submission functionality site wide, and updated the search features as well as user management on the admin side.</p>
              </div>
              <div className='btn-link-div'>
                <Button className='buttonTxt' href='https://www.calcareercenter.org/' target='_blank' rel="noopener noreferrer">Project</Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col className='projectCol'>
          <Card className='projectCard' onClick={handleCard3Click}>
            <img className='pokemonPic card-img-top' src={Iecmhc} alt='IECMHC' />
            <CardBody>
              <div>
                <h1 className='pokeTitle center'>IECMHC</h1>
                <p className='pokeLanguage'><strong>Front End</strong>: Angular - Typescript, HTML, SCSS</p>
                <p className='pokeLanguage'><strong>Back End</strong>: C#, SQL on Azure</p>
                <p className='pokePara'>The Infant and Early Childhood Mental Health Consultation Network is a web application that is used by consultants and members to request services related to mental health. Includes forms that match requestors with consultants to provide said services. Schedules meetings, tracks progress notes from sessions, and reviews reflective practices that can be used after services end. Worked on the flow of the forms based on the program type, site wide flyout updates changed within the database, and worked on API repository connections to grab the correct info from stored procedures.</p>
              </div>
              <div className='btn-link-div'>
                <Button className='buttonTxt' href='https://iecmhc-consultation.org/login' target='_blank' rel="noopener noreferrer">Project</Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </Container>
  )
}
