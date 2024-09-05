import React, { useState } from 'react';
import './SettingsPage.css';

const SettingsPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notifications, setNotifications] = useState(false);
  const [theme, setTheme] = useState('light');

  const handleSave = () => {
    // Implement save logic here
    alert('Settings saved successfully!');
  };

  return (
    <div className="settings-page">
      <h2>Settings</h2>
      <div className="settings-section">
        <label>Username:</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
      </div>

      <div className="settings-section">
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>

      <div className="settings-section">
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>

      <div className="settings-section">
        <label>Enable Notifications:</label>
        <input 
          type="checkbox" 
          checked={notifications} 
          onChange={() => setNotifications(!notifications)} 
        />
      </div>

      <div className="settings-section">
        <label>Theme:</label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <button className="save-button" onClick={handleSave}>
        Save Settings
      </button>
    </div>
  );
};

export default SettingsPage;
