import React from 'react';
import { NavLink } from 'react-router-dom';


const MainNav = () => {
    
    return (
        <>
            <nav className="main-nav">
                <NavLink className="main-nav-logo" to="/">
                    <h1 className="logo">HRnet</h1>
                </NavLink>
                <div>
                    <NavLink className="main-nav-item" to="/">
                        Home
                    </NavLink>
                    <NavLink className="main-nav-item" to="/employees">
                        Current Employees
                    </NavLink>
                </div>
            </nav>
        </>
    );
};

export default MainNav;