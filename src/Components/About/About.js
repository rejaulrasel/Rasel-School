import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import img from './images/about-img.jpg'

const pointSign = <FontAwesomeIcon icon={faHandPointRight} />
const cap = <FontAwesomeIcon icon={faGraduationCap} />
const About = () => {
    return (
        <div className='overflow-hidden about'>
            <h4 className='text-center text-warning mt-5'>WHY choose Rasel's School?</h4>
            <section className='container my-5'>
                <Row className='text-center mb-5'>
                    <Col className='school-structure'>{pointSign} <span className='ms-1'>Best Education</span></Col>
                    <Col className='school-structure'>{pointSign} <span className='ms-1'> Top Management</span></Col>
                    <Col className='school-structure'>{pointSign} <span className='ms-1'> Quality Metting</span></Col>
                </Row>
                <Row>
                    <Col><img className='img-fluid' src={img} alt="" /></Col>
                    <Col className='ms-4'>
                    <h1 className='mt-5'><span className='me-2'>Best Education</span>{cap} </h1>
                        <p className='mt-5'>Rasel's School is free educational HTML template with Bootstrap 4.5.2 CSS layout. Feel free to use it for educational or commercial purposes. Please tell your friends about us. Thank you.</p>
                        
                        </Col>
                </Row>
            </section>
            <section className='registration'>
                <h1 className='text-center'>Take any <span className='text-warning'> Online course </span>and win $500 <br /> for your next class</h1>
                
                  <div className="d-flex justify-content-center">
                  <div className='exam-registration'>
                  <h6>Register your free account and get immediate <br /> access to online courses.</h6>
                  <input type="text" placeholder='your name' />
                  <br />
                  <input type="email" placeholder='enter your email' />
                  <br />
                  <input type="number" placeholder='enter your number'/>
                  </div>
                  </div>
                
            </section>
        </div>
    );
};

export default About;