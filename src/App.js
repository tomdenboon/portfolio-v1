import Home from './components/Home';
import Navbar from './components/Navbar';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import reducers from './redux/reducers';

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col">
          <Navbar />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
