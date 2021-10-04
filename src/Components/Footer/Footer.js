import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'
import img from './images/payment.jpg'

const Footer = () => {
    return (
        <div className='overflow-hidden footer text-white'>
        <div>
        <Row>
            <Col className='text-center p-5' sm={4}>
                <h3>Popular Courses</h3>
                <p>WEB DEVELOPMENT</p>
                <p>LEARN HTML CSS</p>
                <p>PHOTOGRAPHY</p>
                <p>BUSINESS WORLD</p>
                <p>GRAPHICHS DESIGN</p>
            </Col>
            <Col className='text-center p-5' sm={4}>
                <h3>FOLLOW US</h3>
                <a href=""><span className='icon'><i className="fab fa-facebook icon"></i></span></a>
                <a href=""><span className='icon'><i className="fab fa-instagram"></i></span></a>
                <a href=""><span className='icon'><i className="fab fa-whatsapp"></i></span></a>
                <a href=""><span className='icon'><i className="fab fa-twitter"></i></span></a>
            </Col>
            <Col className='text-center p-5' sm={4}><img className='img-fluid' src={img} alt="" /></Col>
        </Row>
        <p className='text-center'>© ALL RIGHTS RESERVED BY <span className='text-warning fw-bold'>REJAUL HASAN</span> -2021</p>
        </div>
        </div>
    );
};

export default Footer;