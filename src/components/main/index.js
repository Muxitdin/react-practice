import React from "react";
import './style.css';

const Main = ({ children }) => {
    return (
        <main className="main">
            {children}
        </main>
    );
}

export default Main;