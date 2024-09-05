import React, { useEffect } from 'react';
import './Dashboard.css';
import { MdWindow } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";

const Dashboard = () => {

    useEffect(() => {
        // Redirect to login if not authenticated
        if (!localStorage.getItem('auth')) {
            window.location.href = '/login';
        }
    }, []);

    const handleLogout = () => {
        // Clear user authentication and redirect to login
        localStorage.removeItem('auth');
        window.location.href = '/login';
    };

    const handleDashboardClick = () => {
        window.location.reload();
    };

    const handleNotificationClick = () => {
        window.location.href = '/notifications';
    };

    return (
        <div className="dashboard">
            <nav className="sidebar">
                <ul>
                    <li>
                        <MdWindow className="icon" />
                        <a href="#" onClick={handleDashboardClick}>Dashboard</a>
                    </li>
                    <li>
                        <FaUser className="icon" />
                        <a href="/profile">Profile</a>
                    </li>
                    <li>
                        <IoSettingsSharp className="icon" />
                        <a href="/settings">Settings</a>
                    </li>
                </ul>
                <button className="logout-btn" onClick={handleLogout}>Log out</button>
            </nav>

            <div className="main-content">
                <header className="header">
                    <div className="header-left">
                        <h1>Dashboard</h1>
                    </div>
                    <div className="header-right">
                        <span className="icon notification-icon" onClick={handleNotificationClick}> <FaBell /></span>
                        <img src="https://via.placeholder.com/150/8e2de2/FFFFFF?text=User" alt="User Profile" className="profile-image" />
                    </div>
                </header>

                <div className="welcome-section">
                    <h1>Welcome to Your Dashboard!</h1>
                    <p>Unleash the power of your campaigns with our intuitive platform.</p>
                </div>

                <div className="cards">
                    <div className="card">
                        <h3>Create Eye-Catching Ads</h3>
                        <p>Easily design and launch ads that capture your audience attention.</p>
                        <button className="create-ad-btn" onClick={() => window.location.href = '/create-ad'}>+ Create ad</button>
                    </div>
                    <div className="card">
                        <h3>Manage Previous Campaigns</h3>
                        <p>Review and analyze past ads to optimize your future strategies.</p>
                        <button className="previous-ads-btn" onClick={() => window.location.href = '/previous-ads'}>Previous ads</button>
                    </div>
                    <div className="card">
                        <h3>Monitor Live Ads</h3>
                        <p>Keep track of your active campaigns and adjust in real-time for maximum impact.</p>
                        <button className="live-ads-btn" onClick={() => window.location.href = '/live-ads'}>Live ads</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;







