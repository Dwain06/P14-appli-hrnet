import React, { useEffect } from "react";
import Header from "../../components/header/Header";

// Import components
import MainNav from "../../components/mainNav/MainNav";

const Login = () => {
    useEffect(() => {
        document.title = "HRnet - Current Employees";
    }, []);

    return (
        <>
            <Header />
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
