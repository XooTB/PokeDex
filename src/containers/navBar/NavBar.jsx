import React from "react";
import logo from './logo.svg';
import Search from "../../components/search/Search";

import './navbar.scss';

function NavBar() {
    return (
        <div className="navBar">
            <a href="/"><img src={logo} alt="logo" /></a>
            <div className="searchSec">
                <Search />
            </div>
        </div>
    )
}

export default NavBar; 