import React from 'react';
import './HomeCourse.css'
const HomeCourse = (props) => {
    console.log(props.course)
    const { name, img, price } = props.course;
    return (
        <div className='home-course'>
            <img src={img} alt="" />
            <h5>{name}</h5>
            <h5>${price}</h5>
            <button className='btn-primary'>25% OFF</button>

        </div>
    );
};

export default HomeCourse;