import './App.css';
import Body from "./components/body/Body"
import ContributeProblem from "./components/Contributions/ContributeProblem";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar/Navbar";
import  Signup  from "./components/authentication/signup/Signup";
import Login from './components/authentication/login/login'


import { DetailedQuestion } from "./components/body/DetailedQuestion";
function App() {
  return (
    <Router>
      <div className="App">
      <NavBar/>
        <Switch>
        <Route exact path="/">
            <Body />
          </Route>
          <Route exact path="/problem/:id">
            <DetailedQuestion />
          </Route>
          <Route exact path="/contribute-question">
            <ContributeProblem />
          </Route>
          
          <Route exact path ="/login">
            <Login />
          </Route>
          <Route exact path ="/signup">
            <Signup />
          </Route>
          
         
         
        </Switch>
      </div>
    </Router>
    
  );
}


export default App;
