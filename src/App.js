
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Courses from './Components/Courses/Courses';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import OurTeam from './Components/OurTeam/OurTeam';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path='/'>
          <Home></Home>
          </Route>
          <Route exact path='/home'>
          <Home></Home>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/courses'>
            <Courses></Courses>
          </Route>
          <Route exact path='/teams'>
            <OurTeam></OurTeam>
          </Route>
          <Route exact path='*'>
        <PageNotFound></PageNotFound>
          </Route>
          
        </Switch>
        <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
