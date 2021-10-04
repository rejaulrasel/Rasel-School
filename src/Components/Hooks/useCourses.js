import {useState} from 'react';
import {useEffect} from 'react';
const useCourses = () => {
    const [courses, setCourses] = useState([]);
    console.log(courses)
    useEffect(() => {
        fetch('./courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return [courses];
}
export default useCourses;
