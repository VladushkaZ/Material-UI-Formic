import React from 'react';
import Main from '../main/main';
import { PropTypes } from 'prop-types';
import Login from '../login/login';
import Page from '../page/page';
import { AppRoute} from '../../const';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {getAuthorizationStatus} from '../../store/user/selector';
import {connect} from 'react-redux';

function App(props) {
  const {user, value} = props;

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
          <Page value={value}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  user: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export {App};
export default connect(mapStateToProps, null)(App);
