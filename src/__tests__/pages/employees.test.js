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

    const employees = screen.getByTestId("employees");
    fireEvent.click(employees);
}

describe("When I am on Employees page", () => {
    test("Then it should render title", async () => {
        setup();
        expect(screen.getByRole("heading", {level: 6, text: ""})).toBeTruthy();
    });
    test("Then it should render employees list", async () => {
        setup();
        const name = await screen.findByText('Elon');
        expect(name).toBeTruthy();
    });
    test("Then I can delete an employee", () => {
        setup();
        const button = screen.getAllByRole('button', {name: 'Delete'});
        fireEvent.click(button[0]);
        const save = screen.getByRole('button', {name: 'Save'});
        fireEvent.click(save);
        const name = screen.queryByText('Elon');
        expect(name).toBeNull();
    });
});