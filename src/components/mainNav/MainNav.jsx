import React from 'react';
import { NavLink } from 'react-router-dom';

import "./mainNav.css"


const MainNav = () => {
    
    return (
        <>
            <nav className="main-nav">
                <div className="main-nav--container">
                    <NavLink data-testid="index" end className={(nav) => (nav.isActive ? "main-nav-item nav-active" : "main-nav-item")} to="/">
                        New employee
                    </NavLink>
                    <NavLink data-testid="employees" className={(nav) => (nav.isActive ? "main-nav-item nav-active" : "main-nav-item")} to="/employees">
                        Current employees
                    </NavLink>
                </div>
            </nav>
        </>
    );
};

export default MainNav;