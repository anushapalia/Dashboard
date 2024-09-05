import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import CreateAd from './CreateAd';
import PreviousAds from './PreviousAds';
import LiveAds from './LiveAds';
import Profile from './Profile';
import Settings from './Settings';
import Notifications from './Notifications';
import Login from './Login';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/create-ad" element={<CreateAd />} />
                <Route path="/previous-ads" element={<PreviousAds />} />
                <Route path="/live-ads" element={<LiveAds />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/notifications" element={<Notifications />} />
            </Routes>
        </Router>
    );
}

export default App;






