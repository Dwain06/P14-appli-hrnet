import React, { useEffect } from "react";

// Import components
import MainNav from "../../components/MainNav";

const Login = () => {
    useEffect(() => {
        document.title = "HRnet - Current Employees";
    }, []);

    return (
        <>
            <MainNav />
            <div id="employee-div" className="container">
                <h1>Current Employees</h1>
                <table id="employee-table" className="display" />
                <a href="index.html">Home</a>
            </div>
        </>
    );
};

export default Login;
