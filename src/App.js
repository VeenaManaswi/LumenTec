import React, { useState } from 'react';
import Login from './components/Login2';
import Signup from './components/Signup2';
import invman from './images/invman.png';
import './App.css';  // Import App.css for styling
import FilterCard from './components/FilterCard'

function App() {
  const [showLogin, setShowLogin] = useState(true); // Toggle between Login and Signup

  return (
    <>
    {/* <div className="app-container">
      <div className="box">
        <div className="form-container">
          {showLogin ? (
            <Login />
          ) : (
            <Signup />
          )}
          <div className="toggle-container">
            <button
              onClick={() => setShowLogin(true)}
              disabled={showLogin}
            >
              Login
            </button>
            <button
              onClick={() => setShowLogin(false)}
              disabled={!showLogin}
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </div> */}
    <FilterCard/>
    </>

  );
}

export default App;

