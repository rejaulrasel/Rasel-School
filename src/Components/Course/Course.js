import React from 'react';

import './Course.css'
const Course = (props) => {
    const {name, price, description, img} = props.course;
    return (
        <div>
            <div className='course p-2'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <h3>Course Fee: ${price}</h3>     
            </div>
        </div>
    );
};

export default Course;