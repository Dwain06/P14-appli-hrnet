import React, { useEffect, useState } from "react";
import ConfirmationModal from "../../components/ConfirmationModal";

// Import components
import MainNav from "../../components/MainNav";

const Index = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        document.title = "HRnet";
    }, []);

    function saveEmployee() {
        const firstName = document.getElementById("first-name");
        const lastName = document.getElementById("last-name");
        const dateOfBirth = document.getElementById("date-of-birth");
        const startDate = document.getElementById("start-date");
        const department = document.getElementById("department");
        const street = document.getElementById("street");
        const city = document.getElementById("city");
        const state = document.getElementById("state");
        const zipCode = document.getElementById("zip-code");

        const employees = JSON.parse(localStorage.getItem("employees")) || [];
        const employee = {
            firstName: firstName.value,
            lastName: lastName.value,
            dateOfBirth: dateOfBirth.value,
            startDate: startDate.value,
            department: department.value,
            street: street.value,
            city: city.value,
            state: state.value,
            zipCode: zipCode.value,
        };
        employees.push(employee);
        localStorage.setItem("employees", JSON.stringify(employees));
    }

    return (
        <>
            <MainNav />
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <a href="/employees">View Current Employees</a>
                <h2>Create Employee</h2>
                <form action="#" id="create-employee">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" />
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" />
                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <input id="date-of-birth" type="text" />
                    <label htmlFor="start-date">Start Date</label>
                    <input id="start-date" type="text" />
                    <fieldset className="address">
                        <legend>Address</legend>
                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" />
                        <label htmlFor="city">City</label>
                        <input id="city" type="text" />
                        <label htmlFor="state">State</label>
                        <select name="state" id="state" />
                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" />
                    </fieldset>
                    <label htmlFor="department">Department</label>
                    <select name="department" id="department">
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
                </form>
                {/* <button onClick={saveEmployee}>Save</button> */}
                <button onClick={() => setShowModal(true)}>Save</button>
            </div>
            <ConfirmationModal
                showModal={showModal}
                setShowModal={setShowModal}
                width="500"
                textContent="Employee created!"
            />
        </>
    );
};

export default Index;
