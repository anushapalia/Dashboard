import React from 'react';
import './Profile.css';
const Profile = () => {
    return (
        <div className="profile-container">
            <header className="profile-header">
                <h1>My Profile</h1>
                <div className="balance-info">
                    <div>Available Balance</div>
                    <div>9657.789000 BTC</div>
                    <div>1230797890 USD</div>
                </div>
                <div className="withdrawal-info">
                    <div>Pending Withdrawal</div>
                    <div>675.5789400 BTC</div>
                    <div>78954648.7890 USD</div>
                </div>
                <div className="user-info">
                <img src="user-image-url" alt="User" />
                    <p>John Dao</p>
                </div>
            </header>
            <nav className="profile-nav">
                <ul>
                    <li>Profile</li>
                    <li>Edit Profile</li>
                    <li>Phone Verification</li>
                    <li>ID Verification</li>
                    <li>Reset Password</li>
                    <li>Activity Log</li>
                </ul>
            </nav>
            <section className="profile-details">
                <div className="profile-image">
                    <img src="profile-image-url" alt="John Doe" />
                    <p>John Doe</p>
                    <p>johndoe45@gmail.com</p>
                    <p>United States</p>
                </div>
                <div className="profile-info">
                    <div className="info-row">
                        <span>Name:</span> <span>John Doe</span>
                    </div>
                    <div className="info-row">
                        <span>Role:</span> <span>User</span>
                    </div>
                    <div className="info-row">
                        <span>Email:</span> <span>johndoe45@gmail.com</span>
                    </div>
                    <div className="info-row">
                        <span>Email verification:</span> <span className="pending">Pending</span>
                    </div>
                    <div className="info-row">
                        <span>Contact:</span> <span>+987 6789 9876 456</span>
                    </div>
                    <div className="info-row">
                        <span>Mobile verification:</span> <span>Active</span>
                    </div>
                    <div className="info-row">
                        <span>Status:</span> <span>Active</span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Profile;


