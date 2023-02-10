import { employeesListDefault } from "./employeesListDefault";

// Get employees from local storage, it could be configured for a future API development
export const getEmployees = () => {
    if (localStorage.getItem("employees")) {
        const employeesListLS = JSON.parse(localStorage.getItem("employees"));
        return({ type: "SET_EMPLOYEES", payload: employeesListLS });
    } else return({ type: "SET_EMPLOYEES", payload: employeesListDefault });
};

// Save store on local storage, it could be PUT in a future API development
export const saveEmployees = (employeesList) => {
    if (employeesList.length > 0) localStorage.setItem("employees", JSON.stringify(employeesList));
}