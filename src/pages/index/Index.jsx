// General imports
import React, { useContext, useEffect, useRef, useState } from "react";

// Import components
import Header from "../../components/header/Header";
import MainNav from "../../components/mainNav/MainNav";
import SelectList from "../../components/selectList/SelectList";


//Import datas
import { states } from "../../utils/statesList";
import { department } from "../../utils/departmentList";
import { EmployeesContext } from "../../context/employeesContext";

//Import functions
import { calculateAge, cancelInputError, removeError, throwInputError } from "../../utils/formErrors"

// Import packages
import DatePicker from "react-date-picker";
import { ConfirmationModal } from "confirmation-modal-lib";

const Index = () => {
    // General datas
    const { dispatch } = useContext(EmployeesContext);

    // Components datas
    const [showModal, setShowModal] = useState(false);
    const [selectedItemState, setSelectedItemState] = useState(undefined);
    const [selectedItemDpt, setSelectedItemDpt] = useState(undefined);
    const [dateOfBirth, setDateOfBirth] = useState(new Date(2000, 0, 1));
    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        document.title = "HRnet - New employee";
    }, []);

    const inputFirstName = useRef();
    const inputLastName = useRef();
    const inputStreet = useRef();
    const inputCity = useRef();
    const inputZipCode = useRef();


    
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
            id: undefined
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
        if (dateOfBirth && calculateAge(dateOfBirth) > 15) {
            cancelInputError("dateOfBirth");
            newEmployee.dateOfBirth = new Date(dateOfBirth.getTime() - ((dateOfBirth.getTimezoneOffset())*60*1000)).toISOString().split('T')[0];
        } else {
            throwInputError("dateOfBirth", "Employee must have 16+");
        }
        if (startDate) {
            cancelInputError("startDate");
            newEmployee.startDate = new Date(startDate.getTime() - ((startDate.getTimezoneOffset())*60*1000)).toISOString().split('T')[0];
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
            newEmployee.id = new Date().valueOf();
            dispatch({ type: "NEW_EMPLOYEE", payload: newEmployee });
            document.querySelector("#new-employee").reset();
            setDateOfBirth(new Date(2000, 0, 1));
            setStartDate(new Date());
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
                                    <label htmlFor="dateOfBirth" id="dateOfBirth">
                                        Date of birth
                                    </label>
                                    <DatePicker
                                        
                                        onChange={setDateOfBirth}
                                        value={dateOfBirth}
                                        maxDate={new Date()}
                                        format="y-MM-dd"
                                    />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="startDate">
                                        Start date
                                    </label>
                                    <DatePicker
                                        id="testest"
                                        onChange={setStartDate}
                                        value={startDate}
                                        maxDate={new Date()}
                                        format="y-MM-dd"
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
