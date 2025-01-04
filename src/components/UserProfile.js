// ProfilePage.js
import React, { useState } from 'react';
import '../styles/UserProfile.css';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('personal'); // State to track the active tab

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>User Profile</h1>
      </div>

      <div className="tabs">
        <button 
          className={`tab-button ${activeTab === 'personal' ? 'active' : ''}`} 
          onClick={() => setActiveTab('personal')}
        >
          Personal Information
        </button>
        <button 
          className={`tab-button ${activeTab === 'settings' ? 'active' : ''}`} 
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </button>
        <button 
          className={`tab-button ${activeTab === 'activity' ? 'active' : ''}`} 
          onClick={() => setActiveTab('activity')}
        >
          Activity Log
        </button>
      </div>

      <div className="profile-content">
        {activeTab === 'personal' && (
          <div className="tab-content">
            <h2>Personal Information</h2>
            <p>Name: John Doe</p>
            <p>Email: john.doe@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="tab-content">
            <h2>Settings</h2>
            <p>Change your password</p>
            <button>Change Password</button>
            <p>Update your profile picture</p>
            <button>Upload Picture</button>
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="tab-content">
            <h2>Activity Log</h2>
            <ul>
              <li>Logged in at 10:00 AM</li>
              <li>Changed password on 12/05/2025</li>
              <li>Uploaded profile picture on 01/01/2025</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
