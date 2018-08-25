import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux' 
import Thunk  from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux' 
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import reducers from './reducers' 

// Development only axios helpers
import axios from 'axios'
window.axios = axios 

const store = createStore(reducers, {}, applyMiddleware(Thunk))

ReactDOM.render(
  <Provider store={store}><App /></Provider>, 
  document.getElementById('root'));
registerServiceWorker();
