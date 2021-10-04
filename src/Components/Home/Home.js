import React from 'react';
import Course from '../Course/Course';
import HomeCourse from '../HomeCourse/HomeCourse';
import useCourses from '../Hooks/useCourses';
import './Home.css'
const Home = () => {
    const [courses] =useCourses();
    return (
        <div className='home'>
            <section>
            <h1 className='pt-5'>DEVELOPING THE MINDSESTS THAT WILL <span className='text-warning'>EMPOWER IN THE FUTURE</span></h1>
            <h4 className='school-info'>GRADUATE SCHOOL OF MANAGEMENRT</h4>
            <h1 className='class-title'><span className='text-warning'>Your</span> CLASSROOM</h1>
            </section>
            <section className='container promo-courses'>
                <h1>COURSES</h1>
                <div className='home-courses'>
                    {
                        courses.slice(0,4).map(course => <HomeCourse
                        key={course.id} course={course}></HomeCourse>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;