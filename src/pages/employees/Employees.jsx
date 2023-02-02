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
            <div className="employees-list">
                <div className="employees-list--container">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos deleniti ea ducimus neque eius soluta quisquam? Dolorem obcaecati nostrum incidunt excepturi, ab necessitatibus amet suscipit accusamus voluptates expedita. Dolorem, sit!</p>
                </div>
            </div>
        </>
    );
};

export default Login;
