import React from 'react';
import '../styles/LoginSignup2.css';

const Login = () => {
  return (
    <div className="container">
      <h1>Welcome!</h1>
      <h2>Login</h2>
      <form method="post">
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username" required />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" required />
        <button type="submit">
          <a href="admin_dashboard.html" style={{ textDecoration: 'none', color: 'white' }}>
            Submit
          </a>
        </button>
      </form>
      <p>
        {/* Don't have an Account?{' '}
        <button id="signup-btn" className="text-button">
          Signup
        </button> */}
      </p>
    </div>
  );
};

export default Login;
