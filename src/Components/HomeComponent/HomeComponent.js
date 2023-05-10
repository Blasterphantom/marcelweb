import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css';
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Row } from 'react-bootstrap';
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
      <Carousel>
        <Carousel.Item>
          <div id='hero1'></div>
          <Carousel.Caption>
            <h3 className='titleTxt'>Marcel Rodriguez Coding</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div id='hero2'></div>
          <Carousel.Caption>
            <h3 className='titleTxt2'>Marcel Rodriguez Coding</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div id='hero3'></div>
          <Carousel.Caption>
            <h3 className='titleTxt3'>Marcel Rodriguez Coding</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h2 className='portfolioTitle'>My Portfolio Showcase</h2>
      <p className='portfolioTxt'>Since beginning my journey in the software engineering field, my dedication to the work and motivation to grow have led me to exceptional projects and experiences. I'm grateful for a profession I'm passionate about, and am proud to share examples of my greatest work.</p>
      <h2 className='portfolioTitle'>Languages/Frameworks</h2>

      <Row className='langRow'>
        <img className='logoSize' src={Html} alt='Html'/>
        <img className='logoSize' src={css} alt='Css'/>
        <img className='logoSize' src={Js} alt='Js'/>
        <img className='logoSize' src={Ts} alt='Ts'/>
        <img className='logoSize' src={BootstrapLogo} alt='Bootstrap'/>
        <img className='logoSize' src={TailwindLogo} alt='Tailwind'/>
        <img className='logoSize' src={ReactLogo} alt='React'/>
        <img className='logoSize' src={Angular} alt='Angular'/>
        <img className='logoSize' src={CLogo} alt='C'/>
        <img className='logoSize' src={Sql} alt='Sql'/>
      </Row>

      <h2 className='portfolioTitle'>Productivity</h2>

      <Row className='langRow'>
        <img className='logoSize' src={Git} alt='Git'/>
        <img className='logoSize' src={Notion} alt='Notion'/>
        <img className='logoSize' src={Slack} alt='Slack'/>
        <img className='logoSize' src={Figma} alt='Figma'/>
        <img className='logoSize' src={Jira} alt='Jira'/>
        <img className='logoSize' src={Postman} alt='Postman'/>
        <img className='logoSize' src={Azure} alt='Azure'/>
      </Row>

      <Row className='rowLearn'>
        <Button className='learnMoreBtn' onClick={ () => {navigate("About")}}>Learn More</Button>
      </Row>

      <div className='projectDiv'>
        <h1 className='projectTxt'>Projects</h1>

        <Row className='project1'>
          <img className='pokemonPic' src={pokemon} alt='pokemon' />
          <div className='colHa'>
            <h1 className='pokeTitle center'>Pokemon API</h1>
            <p className='pokePara'>This application is built on React with Javascript and uses a pokemon api to search any pokemon based off of name and returns the pokemon’s sprite along with info such as moves, location, and abilities. Can also favorite pokemon.</p>
            <a className='pokeLink' href="https://pokemonapireact.azurewebsites.net" target="_blank">https://pokemonapireact.azurewebsites.net/</a>
          </div>
        </Row>


        <Row className='project1 project2'>
          <div className='colHa'>
            <h1 className='weatherTitle center'>Weather App</h1>
            <p className='weatherPara'>This application is built on React with Javascript and uses a pokemon api to search any pokemon based off of name and returns the pokemon’s sprite along with info such as moves, location, and abilities. Can also favorite pokemon.</p>
            <a className='weatherLink' href="https://rodriguezmweatherreact.azurewebsites.net/" target="_blank">https://rodriguezmweatherreact.azurewebsites.net/</a>
          </div>
          <img className='weatherPic' src={weather} alt='weather' />
        </Row>

        <Row className='project1'>
          <img className='SerenityPic' src={Serenity} alt='Serenity' />
          <div className='colHa'>
            <h1 className='pokeTitle center'>Serenity</h1>
            <p className='pokePara'>Mental health app built on React with typescript. 3 person team with contributions including map functionality and database tables. Google maps API and Spotify API implemented.</p>
            <p className='pokeLink'>In progress</p>
          </div>
        </Row>

      </div>

    </Container>
  )
}
