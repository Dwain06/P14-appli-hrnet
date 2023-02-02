import React, { useEffect, useState } from "react";
import ConfirmationModal from "../../components/ConfirmationModal";

// Import components
import MainNav from "../../components/mainNav/MainNav";
import SelectList from "../../components/selectList/SelectList";

//Import lists
import { states } from "../../utils/statesList";
import { department } from "../../utils/departmentList";
import Header from "../../components/header/Header";

const Index = () => {
    const [showModal, setShowModal] = useState(false);

    const [selectedItemState, setSelectedItemState] = useState();
    const [selectedItemDpt, setSelectedItemDpt] = useState();

    useEffect(() => {
        document.title = "HRnet";
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
    }

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
            <Header />
            <MainNav />
            <div className="index">
                <div className="index--container">

                    <form onSubmit={(e) => handleSubmit(e)} id="new-employee">
                        <div className="new-employee--container">
                            <div className="new-employee--infos">
                                <label htmlFor="first-name">First Name</label>
                                <input type="text" id="first-name" />
                                <label htmlFor="last-name">Last Name</label>
                                <input type="text" id="last-name" />
                                <label htmlFor="date-of-birth">Date of Birth</label>
                                <input id="date-of-birth" type="text" />
                                <label htmlFor="start-date">Start Date</label>
                                <input id="start-date" type="text" />
                            </div>
                            
                            <fieldset className="new-employee--address">
                                <legend>Address</legend>
                                <label htmlFor="street">Street</label>
                                <input id="street" type="text" />
                                <label htmlFor="city">City</label>
                                <input id="city" type="text" />
                                <SelectList
                                    selectedItem={selectedItemState}
                                    setSelectedItem={setSelectedItemState}
                                    options={states}
                                    label={"Select a state"}
                                />
                                <label htmlFor="zip-code">Zip Code</label>
                                <input id="zip-code" type="number" />
                            </fieldset>
                        </div>

                        <div className="new-employee--dpt">
                            <SelectList
                                selectedItem={selectedItemDpt}
                                setSelectedItem={setSelectedItemDpt}
                                options={department}
                                label={"Select a department"}
                            />
                        </div>

                        <button type="submit">Save</button>
                    </form>
                    
                </div>
                <ConfirmationModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    textContent="Employee created!"
                    btnContent="Done"
                    clickClose={false}
                />
            </div>
        </>
    );
};

export default Index;
