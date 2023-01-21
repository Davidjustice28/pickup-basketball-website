import React, { FC } from "react";
import {Link} from "react-router-dom"
import "../styles/navbar.css"
import { LoggedIcon } from "./LoggedIcon";

export const NavBar:FC = () => {
    return (
        <nav id="navbar">
            <div id="nav-logo"><Link to="/"><span className="material-symbols-outlined">sports_basketball</span></Link></div>
            <p id="site-name">A site that helps consistently play the game you love</p>
            <ul id="nav-menu">
                <li><Link to="leagues">Leagues</Link></li>
                <li><Link to="about">About Us</Link></li>
                <Link to="dashboard"><LoggedIcon/></Link>
            </ul>
        </nav>
    )
}