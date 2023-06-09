import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css';
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { Button, Col, Row } from 'react-bootstrap';
import pokemon from '../../Assets/pokemon.png';
import weather from '../../Assets/weather.png';
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
import Git from '../../Assets/GithubLogo.png';
import Slack from '../../Assets/SlackLogo.png';
import Azure from '../../Assets/AzureLogo.png';
import Figma from '../../Assets/FigmaLogo.png';
import Jira from '../../Assets/Jira.png';
import Notion from '../../Assets/NotionLogo.png';
import Postman from '../../Assets/PostmanLogo.png';


export default function HomeComponent() {
  let navigate = useNavigate();

  return (
    <Container className='homeContainer'>
      <div className='LuffyHome' >
        <h1 className='heroTxt'>Marcel Rodriguez</h1>
        <h2 className='heroTxt2'>Software Engineer</h2>
      </div>

      <h2 className='portfolioTitle'>My Portfolio Showcase</h2>
      <p className='portfolioTxt'>Since beginning my journey in the software engineering field, my dedication to the work and motivation to grow have led me to exceptional projects and experiences. I'm grateful for a profession I'm passionate about, and am proud to share examples of my greatest work.</p>
      <h2 className='portfolioTitle'>Languages/Frameworks</h2>

      <Row className='langRow'>
        <Col className='imgCol'>
        <img className='logoSize' src={Html} alt='Html'/>
        <p className='imgTxt'>HTML</p>
        </Col>
        <Col className='imgCol'>
        <img className='logoSize' src={css} alt='Css'/>
        <p className='imgTxt'>CSS</p>
        </Col>
        <Col className='imgCol'>
        <img className='logoSize' src={Js} alt='Js'/>
        <p className='imgTxt'>Javascript</p>
        </Col>
        <Col className='imgCol'>
        <img className='logoSize' src={Ts} alt='Ts'/>
        <p className='imgTxt'>Typescript</p>
        </Col>
        <Col className='imgCol'>
        <img className='logoSize' src={BootstrapLogo} alt='Bootstrap'/>
        <p className='imgTxt'>Bootstrap</p>
        </Col>
        <Col className='imgCol'>
        <img className='logoSize' src={TailwindLogo} alt='Tailwind'/>
        <p className='imgTxt'>TailwindCSS</p>
        </Col>
        <Col className='imgCol'>
        <img className='logoSize' src={ReactLogo} alt='React'/>
        <p className='imgTxt'>React/Native</p>
        </Col>
        <Col className='imgCol'>
        <img className='logoSize' src={Angular} alt='Angular'/>
        <p className='imgTxt'>Angular/Ionic</p>
        </Col>
        <Col className='imgCol'>
        <img className='logoSize' src={CLogo} alt='C'/>
        <p className='imgTxt'>C#</p>
        </Col>
        <Col className='imgCol'>
        <img className='logoSize' src={Sql} alt='Sql'/>
        <p className='imgTxt'>SQL</p>
        </Col>
      </Row>

      <h2 className='portfolioTitle'>Productivity</h2>

      <Row className='langRow'>
        <Col className='imgCol'>
        <img className='logoSize' src={Git} alt='Git'/>
        <p className='imgTxt'>Github</p>
        </Col>
        <Col className='imgCol'>
        <img className='logoSize' src={Notion} alt='Notion'/>
        <p className='imgTxt'>Notion</p>
        </Col>
        <Col className='imgCol'>
        <img className='logoSize' src={Slack} alt='Slack'/>
        <p className='imgTxt'>Slack</p>
        </Col>
        <Col className='imgCol'>
        <img className='logoSize' src={Figma} alt='Figma'/>
        <p className='imgTxt'>Figma</p>
        </Col>
        <Col className='imgCol'>
        <img className='logoSize' src={Jira} alt='Jira'/>
        <p className='imgTxt'>Jira</p>
        </Col>
        <Col className='imgCol'>
        <img className='logoSize' src={Postman} alt='Postman'/>
        <p className='imgTxt'>Postman</p>
        </Col>
        <Col className='imgCol'>
        <img className='logoSize' src={Azure} alt='Azure'/>
        <p className='imgTxt'>Azure</p>
        </Col>
      </Row>

      <Row className='rowLearn'>
        <Button className='learnMoreBtn' onClick={ () => {navigate("About")}}>Learn More</Button>
      </Row>

      <div className='projectDiv'>
        <h1 className='projectTxt'>Projects</h1>
        <Row className='project1'>
          <img className='SerenityPic' src={Serenity} alt='Serenity' />
          <div className='colHa'>
            <h1 className='pokeTitle center'>Serenity</h1>
            <p className='pokeLanguage'><strong>Front End</strong>: React - Typescript, HTML, CSS</p>
            <p className='pokeLanguage'><strong>Back End</strong>: C#, SQL</p>
            <p className='pokePara'>Mental health app built on React with typescript that helps a user with mental health by providing resources and daily check ins with a journaling feature. 3 person team with contributions including map functionality and database tables. Google maps API and Spotify API implemented.</p>
            <div className='buttonRow'>
              <Button className='buttonTxt' href='https://serenitymentalhealth.azurewebsites.net/' target='_blank'>Project</Button>
            </div>
          </div>
        </Row>

        <Row className='project1 project2'>
          <div className='colHa'>
            <h1 className='weatherTitle center'>Weather App</h1>
            <p className='pokeLanguage'><strong>Front End</strong>: React - Javascript, HTML, CSS</p>
            <p className='weatherPara'>This application is built on React with Javascript and uses a pokemon api to search any pokemon based off of name and returns the pokemon’s sprite along with info such as moves, location, and abilities. Can also favorite pokemon.</p>
            <div className='buttonRow'>
              <Button className='buttonTxt' href='https://rodriguezmweatherreact.azurewebsites.net/' target='_blank'>Project</Button>
            </div>
          </div>
          <img className='weatherPic' src={weather} alt='weather' />
        </Row>

        <Row className='project1'>
          <img className='pokemonPic' src={pokemon} alt='pokemon' />
          <div className='colHa'>
            <h1 className='pokeTitle center'>Pokemon API</h1>
            <p className='pokeLanguage'><strong>Front End</strong>: React - Javascript, HTML, CSS</p>
            <p className='pokePara'>This application uses a pokemon api to search any pokemon based off of name and returns the pokemon’s sprite along with info such as moves, location, and abilities. Can also favorite pokemon. Project was built with Tailwind and Javascript, and later rebuilt in React. All information and pictures are fetched with an api on search, and use states are implemented for changing data.</p>
            <div className='buttonRow'>
              <Button className='buttonTxt' href='https://pokemonapireact.azurewebsites.net' target='_blank'>Project</Button>
            </div>
          </div>
        </Row>



      </div>

    </Container>
  )
}
