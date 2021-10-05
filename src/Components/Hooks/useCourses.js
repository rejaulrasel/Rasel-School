import {useState} from 'react';
import {useEffect} from 'react';
const useCourses = () => {

    // declare state for all courses
    const [courses, setCourses] = useState([]);

    // load the data from json file
    useEffect(() => {
        fetch('./courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return [courses];
}
export default useCourses;
