import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login2';
import Signup from './components/Signup2';
import UserProfile from './components/UserProfile';
import FilterCard from './components/FilterCard';
import './App.css';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Authentication Page (Login/Signup) */}
          <Route
            path="/"
            element={
              <div className="box">
                <div className="form-container">
                  {showLogin ? (
                    <Login />
                  ) : (
                    <Signup />
                  )}
                  <div className="toggle-container">
                    <button onClick={() => setShowLogin(true)} disabled={showLogin}>
                      Login
                    </button>
                    <button onClick={() => setShowLogin(false)} disabled={!showLogin}>
                      Signup
                    </button>
                  </div>
                </div>
              </div>
            }
          />
          
          {/* User Profile Page */}
          <Route path="/user-profile" element={<UserProfile />} />
          
          {/* Filter Card Page */}
          <Route path="/filter-card" element={<FilterCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
