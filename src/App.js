import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { applyTheme } from "./themes/utils";

function App() {
  const theme = useSelector((state) => state.theme.theme);
  useEffect(() => {
    applyTheme(theme);
  });

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
