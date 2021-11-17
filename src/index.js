import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import { createAPI } from './services/api';
import { requireAuthorization } from './store/action';
import { AuthorizationStatus } from './const';
import  rootReducer  from './store/root-reducer';
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import thunk from 'redux-thunk';
import { checkAuth } from './store/api-action';


const api = createAPI(
  // eslint-disable-next-line no-use-before-define
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);
const User = {NAME: 'User/1'};

store.dispatch(checkAuth());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App user={User.NAME}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
