import React from "react";
import './Style.css';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <img className="texasLogo" src="https://boombabyhome.files.wordpress.com/2015/04/60109-texas-frightmare-weekend-feature.jpg"></img>
            <Link to="/celebrities">
                <button className="navButton">Celebrities</button>
            </Link>
            <Link to="/">
                <button className="navButton">Home</button>
            </Link>
        </div>
    )
}
