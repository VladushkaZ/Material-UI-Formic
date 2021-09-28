import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { createStore } from 'redux';
import { reducer } from './store/reduser';
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const User = {NAME: 'User/1'};
const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App user={User.NAME}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
