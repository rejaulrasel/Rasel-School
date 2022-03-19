import React from 'react';
import './Course.css'
const Course = (props) => {
    const { name, price, description, img } = props.course;
    return (
        <div>
            <div className='course'>
                <img className='img-fluid' src={img} alt="" />
                <div className="course-info p-2">
                    <h4 className='text-center my-3 name'>{name}</h4>
                    <p>{description}</p>
                    <h3 className='text-center mt-3'>Course Fee: ${price}</h3>
                </div>
                <button className='btn-primary'>BUY COURSE</button>
            </div>

        </div>
    );
};

export default Course;