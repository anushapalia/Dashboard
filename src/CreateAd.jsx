import React from 'react';
import './CreateAd.css';

const CreateAd = () => {
    return (
        <div className="create-ad-container">
            <h1>Create Your Ad</h1>
            <p>Fill out the details below to create a new ad.</p>

            <form className="ad-form">
                <div className="form-group">
                    <label htmlFor="adTitle">Ad Title</label>
                    <input type="text" id="adTitle" placeholder="Enter ad title" />
                </div>

                <div className="form-group">
                    <label htmlFor="adDescription">Description</label>
                    <textarea id="adDescription" placeholder="Enter ad description" rows="4"></textarea>
                </div>

                <button type="submit" className="submit-button">Create Ad</button>
            </form>
        </div>
    );
}

export default CreateAd;

