import React from 'react';
import './PreviousAds.css';

const PreviousAds = () => {
    return (
        <div className="previous-ads-container">
            <h1>Manage Previous Campaigns</h1>
            <p>Here you can view and manage all your previous ad campaigns.</p>

            <div className="campaign-list">
                {/* Example campaign items */}
                <div className="campaign-item">
                    <h2>Campaign Title 1</h2>
                    <p>Campaign Description 1</p>
                    <button className="manage-button">Edit Campaign</button>
                    <button className="delete-button">Delete Campaign</button>
                </div>
                <div className="campaign-item">
                    <h2>Campaign Title 2</h2>
                    <p>Campaign Description 2</p>
                    <button className="manage-button">Edit Campaign</button>
                    <button className="delete-button">Delete Campaign</button>
                </div>
                {/* Add more campaign items as needed */}
            </div>
        </div>
    );
}

export default PreviousAds;

