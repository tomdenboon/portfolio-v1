import { createContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import { applyTheme } from './themes/utils';

export const NavbarContext = createContext(false);

function App() {
  const [isNavbarLoaded, setIsNavbarLoaded] = useState(false);
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    setTimeout(() => {
      setIsNavbarLoaded(true);
    }, 300);
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <Router>
      <div className="flex flex-col h-screen text-text-base bg-primary-dark">
        <Navbar />
        <NavbarContext.Provider value={isNavbarLoaded}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
          </Switch>
        </NavbarContext.Provider>
      </div>
    </Router>
  );
}

export default App;
