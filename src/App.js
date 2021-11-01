import React from 'react';  
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-gray-300">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
