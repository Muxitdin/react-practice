import React from "react";
import avatar from '../../../images/avatar.jpg'
import './style.css';

const User = () => {
    return (
        <div className="user-info">
            <img src={avatar} alt="user-profile" />
            <div className="about-user">
                <h1>Ivan I.</h1>
                <h3>Date of birth: 2nd Jan</h3>
                <h3>City: Tashkent</h3>
                <h3>Education: UNI' 11</h3>
                <h3>Web Site: https://www.pinterest.com</h3>
            </div>
        </div>
    );
}

export default User;