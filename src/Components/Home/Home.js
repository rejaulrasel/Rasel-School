import React from 'react';
import HomeCourse from '../HomeCourse/HomeCourse';
import useCourses from '../Hooks/useCourses';
import bgVideo from './video/home-bg-video-2.mp4';
import './Home.css'
const Home = () => {
    // get data from useCourses hooks
    const [courses] = useCourses();
    return (
        <div className='home'>

            {/* home page first section with background video */}
            <section>
                <video autoPlay loop muted id='video'>
                    <source src={bgVideo} type='video/mp4' />
                </video>
                <div>
                    <h1 className='text-center fw-bold school-info'>DEVELOPING THE MINDSESTS <br /> THAT WILL <span className='text-warning'>EMPOWER IN THE FUTURE</span></h1>
                    <h4 className='pt-5 text-center fw-bold'>GRADUATE SCHOOL OF MANAGEMENRT</h4>
                    <h1 className='class-title text-center fw-bold'><span className='text-warning'>Your</span> CLASSROOM</h1>
                </div>
            </section>

            {/* Home page Promo courses section */}
            <section className='promo-courses '>
                <h1 className='text-center pt-5 class-title text-warning'>COURSES</h1>
                <div className='home-courses'>
                    {
                        courses.slice(1, 5).map(course => <HomeCourse
                            key={course.id} course={course}></HomeCourse>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;