import React from 'react';
import { NavLink } from 'react-router-dom';

import "./header.css"

import logo from "../../assets/logo.jpg"

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header--container">
                    <NavLink className="header__logo" to="/">
                        <img src={logo} alt="Logo" />
                    </NavLink>
                    <div className="header__title">
                        HRnet application
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;