import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import { setTimer, update } from './redux/actions'
import { loadState, saveState } from './utils'

const persistedState = loadState()
const store = createStore(reducers, persistedState)
if(persistedState === undefined){
  store.dispatch(setTimer("The Timer", 0))
}

store.subscribe(() => {
  saveState(store.getState())
})

let lastUpdateTime = Date.now()
setInterval(() => {
  const now = Date.now()
  const deltaTime = now - lastUpdateTime
  lastUpdateTime = now
  store.dispatch(update(deltaTime))
}, 50)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
