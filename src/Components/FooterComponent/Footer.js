import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../FooterComponent/Footer.css';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <Container className='footerContainer'>
        <p className='emailFoot'>marcelrodriguezcoding@gmail.com</p>
        <p className='copyright'>©2023 by marcelrodriguezcoding. Proudly created by Marcel Rodriguez</p>
    </Container>
  )
}
