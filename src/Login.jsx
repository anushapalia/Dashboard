import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [isLoggedOut, setIsLoggedOut] = useState(false);

    const handleLogin = () => {
        // Simulate user authentication
        localStorage.setItem('auth', 'true');
        // Redirect to homepage
        window.location.href = '/';
    };

    const handleLogout = () => {
        // Simulate user logout
        localStorage.removeItem('auth');
        setIsLoggedOut(true);
    };

    return (
        <div className="login-container">
            <h1>Login Page</h1>
            <button className="login-button" onClick={handleLogin}>Login</button>
            {isLoggedOut && (
                <div className="logout-message">
                    <span className="green-tick">✔</span> You have successfully logged out.
                </div>
            )}
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Login;


