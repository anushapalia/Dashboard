import React from 'react';
import './Settings.css';
import { FaUser, FaBell, FaEye, FaLock, FaHeadphones, FaInfoCircle } from 'react-icons/fa';

const Settings = () => {
    return (
        <div className="settings-container">
            <header className="settings-header">
                <h1>Settings</h1>
            </header>

            <div className="settings-list">
                <div className="settings-item">
                    <FaUser className="settings-icon" />
                    <a href="/account">Account</a>
                </div>
                <div className="settings-item">
                    <FaBell className="settings-icon" />
                    <a href="/notifications">Notifications</a>
                </div>
                <div className="settings-item">
                    <FaEye className="settings-icon" />
                    <a href="/appearance">Appearance</a>
                </div>
                <div className="settings-item">
                    <FaLock className="settings-icon" />
                    <a href="/privacy-security">Privacy & Security</a>
                </div>
                <div className="settings-item">
                    <FaHeadphones className="settings-icon" />
                    <a href="/help-support">Help and Support</a>
                </div>
                <div className="settings-item">
                    <FaInfoCircle className="settings-icon" />
                    <a href="/about">About</a>
                </div>
            </div>
        </div>
    );
};

export default Settings;

