import { render, screen, fireEvent } from "@testing-library/react";
import 'jest-canvas-mock';
import { EmployeesContextProvider } from "../../context/employeesContext";
import App from "../../App";

const setup = () => {
    render(
        <EmployeesContextProvider>
                <App />
        </EmployeesContextProvider>
    );
}

describe("When I submit form", () => {
    test("Then if an error is detected, add class error on input", () => {
        setup();

        fireEvent.click(screen.getByText(/Save/i))
        const firstNameInput = screen.getByTestId("firstName");
        expect(firstNameInput.getAttribute("class")).toEqual("error");
    });
    test("Then if first name is submit, error should disapear", () => {
        setup();

        const firstNameInput = screen.getByTestId("firstName");
        fireEvent.change(firstNameInput, {target: {value: "test"}});
        fireEvent.click(screen.getByText(/Save/i));
        expect(firstNameInput.getAttribute("class")).toEqual(null);
    });
    test("Then if all inputs are fill up, modal should appear", async () => {
        setup();

        const firstNameInput = screen.getByLabelText("First name");
        const lastNameInput = screen.getByLabelText("Last name");
        const streetInput = screen.getByLabelText("Street");
        const cityInput = screen.getByLabelText("City");
        const stateInput = screen.getByLabelText("Select a state");
        const zipCodeInput = screen.getByLabelText("Zip code");
        const departmentInput = screen.getByLabelText("Select a department");

        fireEvent.change(firstNameInput, {target: {value: "test"}});
        fireEvent.change(lastNameInput, {target: {value: "test"}});
        fireEvent.change(streetInput, {target: {value: "test"}});
        fireEvent.change(cityInput, {target: {value: "test"}});
        fireEvent.change(stateInput, {target: {value: "AL"}});
        fireEvent.change(zipCodeInput, {target: {value: "00000"}});
        fireEvent.change(departmentInput, {target: {value: "Sales"}});

        fireEvent.click(screen.getByText(/Save/i));

        expect(screen.getByText("Employee created!")).toBeTruthy();
    });
});