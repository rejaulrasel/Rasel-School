import React from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import useCourses from '../Hooks/useCourses';
import './Courses.css'
const Courses = () => {
    //get data from useCourses hooks
    const [courses] = useCourses();
    return (
        <div className='courses-section'>
            <div className='courses container'>
                <Row xs={1} md={3}>
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Courses;