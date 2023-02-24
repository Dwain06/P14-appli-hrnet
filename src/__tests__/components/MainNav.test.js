import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import MainNav from "../../components/mainNav/MainNav";

describe("When I am on home page", () => {
    test("Then current page navigation button should be highlighted", async () => {
        render(
            <Router>
                <MainNav />
            </Router>
        )
        const index = screen.getByTestId("index");
        const employees = screen.getByTestId("employees");
        expect(index).toBeTruthy();
        expect(index.getAttribute("aria-current")).toEqual("page");
        fireEvent.click(employees);
        expect(employees.getAttribute("aria-current")).toEqual("page");
    });
});