import './App.css';
import Body from "./components/body/Body"
import ContributeProblem from "./components/Contributions/ContributeProblem";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar/Navbar";

import { DetailedQuestion } from "./components/body/DetailedQuestion";
function App() {
  return (
    <Router>
      <div className="App">
      <NavBar/>
        <Switch>
          <Route exact path="/">
            <Body />
        
            <ContributeProblem />
          </Route>
          <Route exact path="/problem/:id">
            <DetailedQuestion />
          </Route>
          
         
         
        </Switch>
      </div>
    </Router>
    
  );
}


export default App;
