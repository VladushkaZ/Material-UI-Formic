import { PropTypes } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function Main(props) {
  const { user } = props;
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
          <Link to="/login">
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
};

export default Main;
