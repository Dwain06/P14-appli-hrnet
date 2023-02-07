import React, { useEffect, useRef, useState } from "react";
import ConfirmationModal from "../../components/ConfirmationModal";

// Import components
import MainNav from "../../components/mainNav/MainNav";
import SelectList from "../../components/selectList/SelectList";

//Import lists
import { states } from "../../utils/statesList";
import { department } from "../../utils/departmentList";
import Header from "../../components/header/Header";

const Index = () => {
    // General datas
    const [employeesList, setEmployeesList] = useState();

    // Components datas
    const [showModal, setShowModal] = useState(false);
    const [selectedItemState, setSelectedItemState] = useState(undefined);
    const [selectedItemDpt, setSelectedItemDpt] = useState(undefined);

    useEffect(() => {
        document.title = "HRnet";

        // Get employees from local storage, it could be configured for a future API development
        const getEmployees = () => {
            if (localStorage.getItem("employees")) {
                setEmployeesList(JSON.parse(localStorage.getItem("employees")));
            } else setEmployeesList([]);
        };
        getEmployees();
    }, []);

    useEffect(() => {
        // Save store on local storage, it could be PUT in a future API development
        if (employeesList)
            localStorage.setItem("employees", JSON.stringify(employeesList));
    }, [employeesList]);

    const inputFirstName = useRef();
    const inputLastName = useRef();
    const inputDateOfBirth = useRef();
    const inputStartDate = useRef();
    const inputStreet = useRef();
    const inputCity = useRef();
    const inputZipCode = useRef();

    const throwInputError = (parentNodeId, message) => {
        // Checking if error already exist
        if (document.querySelector("#" + parentNodeId + " + .wrong-login")) {
            const span = document.querySelector(
                "#" + parentNodeId + " + .wrong-login"
            );
            span.innerText = message;
        } else {
            const span = document.createElement("span");
            span.classList.add("wrong-login");
            span.innerText = message;
            const parentNode = document.getElementById(parentNodeId);
            parentNode.insertAdjacentElement("afterend", span);
        }
        document.querySelector("input#" + parentNodeId)?.classList.add("error");
    };

    const cancelInputError = (parentNodeId) => {
        const span = document.querySelector(
            "#" + parentNodeId + " + .wrong-login"
        );
        if (span) span.innerText = "";
    };

    const removeError = (e) => {
        e.target.classList.remove("error");
    };

    // Verifying form inputs
    const handleSubmit = (e) => {
        e.preventDefault();

        const newEmployee = {
            firstName: undefined,
            lastName: undefined,
            dateOfBirth: undefined,
            startDate: undefined,
            street: undefined,
            city: undefined,
            state: undefined,
            zipCode: undefined,
            department: undefined,
        };

        if (inputFirstName.current.value.trim().length > 1) {
            cancelInputError("firstName");
            newEmployee.firstName = inputFirstName.current.value;
        } else {
            throwInputError(
                "firstName",
                "First name must contain at least 2 characters"
            );
        }
        if (inputLastName.current.value.trim().length > 1) {
            cancelInputError("lastName");
            newEmployee.lastName = inputLastName.current.value;
        } else {
            throwInputError(
                "lastName",
                "Last name must contain at least 2 characters"
            );
        }
        if (inputDateOfBirth.current.value) {
            cancelInputError("dateOfBirth");
            newEmployee.dateOfBirth = inputDateOfBirth.current.value;
        } else {
            throwInputError("dateOfBirth", "Employee must have 16+");
        }
        if (inputStartDate.current.value) {
            cancelInputError("startDate");
            newEmployee.startDate = inputStartDate.current.value;
        } else {
            throwInputError("startDate", "date must be today or before");
        }
        if (inputStreet.current.value.trim().length > 2) {
            cancelInputError("street");
            newEmployee.street = inputStreet.current.value;
        } else {
            throwInputError("street", "Street must contain at least 3 characters");
        }
        if (inputCity.current.value.trim().length > 2) {
            cancelInputError("city");
            newEmployee.city = inputCity.current.value;
        } else {
            throwInputError("city", "City must contain at least 3 characters");
        }
        if (selectedItemState) {
            cancelInputError("state");
            newEmployee.state = selectedItemState;
        } else {
            throwInputError("state", "Please select a state");
        }
        if (inputZipCode.current.value.length === 5 && inputZipCode.current.value.length > 0) {
            cancelInputError("zipCode");
            newEmployee.zipCode = inputZipCode.current.value;
        } else {
            throwInputError("zipCode", "Please enter a 5 digit number");
        }
        if (selectedItemDpt) {
            cancelInputError("department");
            newEmployee.department = selectedItemDpt;
        } else {
            throwInputError("department", "Please select a department");
        }

        if (
            newEmployee.firstName &&
            newEmployee.lastName &&
            newEmployee.dateOfBirth &&
            newEmployee.startDate &&
            newEmployee.city &&
            newEmployee.state &&
            newEmployee.zipCode &&
            newEmployee.department
        ) {
            setEmployeesList([...employeesList, newEmployee]);
            document.querySelector("#new-employee").reset();
            setShowModal(true);
        }
    };

    return (
        <>
            <Header />
            <MainNav />
            <div className="index">
                <div className="index--container">
                    <form
                        onSubmit={(e) => handleSubmit(e)}
                        id="new-employee"
                        autoComplete="off"
                    >
                        <div className="new-employee--container">
                            <div className="new-employee--infos">
                                <div className="input-wrapper">
                                    <label htmlFor="firstName">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        ref={inputFirstName}
                                        onChange={(e) => removeError(e)}
                                        autoComplete="no"
                                    />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="lastName">Last name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        ref={inputLastName}
                                        onChange={(e) => removeError(e)}
                                        autoComplete="no"
                                    />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="dateOfBirth">
                                        Date of birth
                                    </label>
                                    <input
                                        type="text"
                                        id="dateOfBirth"
                                        ref={inputDateOfBirth}
                                        onChange={(e) => removeError(e)}
                                    />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="startDate">
                                        Start date
                                    </label>
                                    <input
                                        type="text"
                                        id="startDate"
                                        ref={inputStartDate}
                                        onChange={(e) => removeError(e)}
                                    />
                                </div>
                            </div>

                            <fieldset className="new-employee--address">
                                <legend>Address</legend>
                                <div className="input-wrapper">
                                    <label htmlFor="street">Street</label>
                                    <input
                                        type="text"
                                        id="street"
                                        ref={inputStreet}
                                        onChange={(e) => removeError(e)}
                                        autoComplete="no"
                                    />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="city">City</label>
                                    <input
                                        type="text"
                                        id="city"
                                        ref={inputCity}
                                        onChange={(e) => removeError(e)}
                                        autoComplete="no"
                                    />
                                </div>
                                <div className="input-wrapper">
                                    <SelectList
                                        id="state"
                                        selectedItem={selectedItemState}
                                        setSelectedItem={setSelectedItemState}
                                        options={states}
                                        label={"Select a state"}
                                    />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="zipCode">Zip code</label>
                                    <input
                                        type="number"
                                        id="zipCode"
                                        ref={inputZipCode}
                                        onChange={(e) => removeError(e)}
                                        autoComplete="no"
                                    />
                                </div>
                            </fieldset>
                        </div>

                        <div className="new-employee--dpt">
                            <div className="input-wrapper">
                                <SelectList
                                    id="department"
                                    selectedItem={selectedItemDpt}
                                    setSelectedItem={setSelectedItemDpt}
                                    options={department}
                                    label={"Select a department"}
                                />
                            </div>
                        </div>

                        <button type="submit">Save</button>
                    </form>
                </div>
                <ConfirmationModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    textContent="Employee created!"
                    btnContent="Done"
                    clickClose={true}
                    escapeClose={true}
                    colorModal="grey"
                />
            </div>
        </>
    );
};

export default Index;
