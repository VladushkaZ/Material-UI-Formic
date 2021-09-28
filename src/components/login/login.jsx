import React from 'react';
import Basic from '../loginForm/loginForm';

function Login() {
  return (
    <div className="page">
      <button className="green">
        <p>MARKET</p>
      </button>
      <button className="grey">
        <p>PROJECTS</p>
      </button>
      <button className="blue">
        <p>USER</p>
      </button>
      <p className="welcome">Welcome to the ...</p>

      <Basic/>
    </div>
  );
}

export default Login;
