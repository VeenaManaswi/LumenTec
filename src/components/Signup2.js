import React from 'react';
import '../styles/LoginSignup2.css';

const Signup = () => {
  return (
    <div className="container">
      <h1>Create Your Account</h1>
      <form method="post">
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username" required />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" required />
        <label htmlFor="role">Role:</label>
        <select name="role" id="role" required>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="staff">Staff</option>
        </select>
        <button type="submit">
          <a href="index.html" style={{ textDecoration: 'none', color: 'white' }}>
            Register
          </a>
        </button>
      </form>
      <p>
        {/* Already have an account?{' '}
        <button id="login-btn" className="text-button">
          Login
        </button> */}
      </p>
    </div>
  );
};

export default Signup;
