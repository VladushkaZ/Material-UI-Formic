import React from 'react';
import Main from '../main/main';
import { PropTypes } from 'prop-types';
import Login from '../login/login';
import Page from '../page/page';
import { AppRoute } from '../../const';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App(props) {
  const {user, handleChange, value} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main user={user}/>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login/>
        </Route>
        <Route exact path={AppRoute.PAGE}>
          <Page handleChange={handleChange} value={value}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  user: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default App;
