import React, from "react";
import './Style.css';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <Link to="/celebrities">
                <button className="navButton">Celebrities</button>
            </Link>
            <Link to="/">
                <button className="navButton">Home</button>
            </Link>
        </div>
    )
}
