import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../FooterComponent/Footer.css';
import { Container, Row } from 'react-bootstrap';
import Indeed from '../../Assets/linkedin.png';
import Facebook from '../../Assets/faceBookLight.png';
import Github from '../../Assets/GithubLogo.png';

export default function Footer() {
  return (
    <Container className='footerContainer'>
        <p className='emailFoot'>marcelrodriguezcoding@gmail.com</p>
        <Row className='socialRow'>
          <a className='aTag' href='https://www.facebook.com/profile.php?id=100089747654123' target='_blank'>
          <img className='footImg' src={Facebook} alt='facebook'/>
          </a>
          <a className='aTag' href='https://www.linkedin.com/in/marcel-rodriguez-coding/' target='_blank'>
          <img className='footImg' src={Indeed} alt='indeed' />
          </a>
          <a className='aTag' href='https://github.com/Blasterphantom' target='_blank'>
          <img className='footImg' src={Github} alt='github' />
          </a>
        </Row>
        <p className='copyright'>©2023 by marcelrodriguezcoding. Proudly created by Marcel Rodriguez</p>
    </Container>
  )
}
