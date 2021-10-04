import React from 'react';
import Course from '../Course/Course';
import useCourses from '../Hooks/useCourses';
import './Courses.css'
const Courses = () => {
    const [courses] = useCourses();
    console.log(courses);
    return (
        <div className='courses-section'>
            <div className='courses container'>
            {courses.map(course => <Course
            course={course}
            ></Course>)}
            </div>
        </div>
    );
};

export default Courses;