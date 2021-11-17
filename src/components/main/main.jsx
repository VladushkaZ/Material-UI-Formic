import { PropTypes } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/api-action';

function Main(props) {
  const { user, logoutApp } = props;
  return (
    <div className="page">
      <Link to="/page">
        <button className="green">
          <p>MARKET</p>
        </button>
      </Link>
      <button className="grey">
        <p>PROJECTS</p>
      </button>
      <button className="blue">
        <p>USER</p>
      </button>
      <p className="welcome">Welcome to the ...</p>

      <div className="user">
        <img src="../images/user.png" alt="user" />
        <div>
          <p>{user}</p>
          <Link
            to="/login"
            onClick={(evt) => {
              evt.preventDefault();
              logoutApp();
            }}
          >
            <img src="../images/Logout.svg" alt="Logout" />
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

Main.propTypes = {
  user: PropTypes.string.isRequired,
  logoutApp: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  logoutApp() {
    dispatch(logout());
  },
});

export { Main };
export default connect(null, mapDispatchToProps)(Main);

