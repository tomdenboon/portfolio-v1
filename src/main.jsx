import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import persistStore from 'redux-persist/lib/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import persistedReducer from './configureStore';

let store = createStore(persistedReducer);
let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
