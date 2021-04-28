import React from 'react';
import Nav from "./Nav.js";
import Logo from "./Logo.js";

const Header = () => {
    return (
        <div className="header">
            <Logo/>
            <Nav/>
        </div>
            
    )
}

export default Header
