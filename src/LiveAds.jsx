import React from 'react';
import './LiveAds.css';

const LiveAds = () => {
    return (
        <div className="live-ads-container">
            <h1>Monitor Live Ads</h1>
            <p>Keep track of your active ad campaigns in real-time.</p>

            <div className="ad-list">
                {/* Example live ad items */}
                <div className="ad-item">
                    <h2>Live Ad Title 1</h2>
                    <p>Status: <span className="status-running">Running</span></p>
                    <button className="pause-button">Pause Ad</button>
                    <button className="stop-button">Stop Ad</button>
                </div>
                <div className="ad-item">
                    <h2>Live Ad Title 2</h2>
                    <p>Status: <span className="status-paused">Paused</span></p>
                    <button className="resume-button">Resume Ad</button>
                    <button className="stop-button">Stop Ad</button>
                </div>
                {/* Add more live ad items as needed */}
            </div>
        </div>
    );
}

export default LiveAds;
