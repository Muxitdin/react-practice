import React from 'react';
import "./style.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div><a href="/">Profile</a></div>
            <div><a href="/">Messages</a></div>
            <div><a href="/">News</a></div>
            <div><a href="/">Music</a></div>
            <div><a href="/">Settings</a></div>
        </div>
    );
};

export default Sidebar;