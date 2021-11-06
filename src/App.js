import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { applyTheme } from "./themes/utils";
import defaultTheme from "./themes/defaultTheme";
import testTheme from "./themes/testTheme";
import stealthTheme from "./themes/stealthTheme";

function App() {
  useEffect(() => {
    applyTheme(defaultTheme);
  }, []);
  return (
    <Router>
      <div className="flex flex-col h-screen text-text-base bg-primary-dark">
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
