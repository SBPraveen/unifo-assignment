import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul className="nav-links">
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Contact</li>
                <Link className="appliedLink" to="/jobs">
                    <li>Jobs</li>
                </Link>
                
            </ul>
        </nav>
    )
}

export default Nav;