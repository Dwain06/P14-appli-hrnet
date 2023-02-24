import { calculateAge } from "../../utils/formErrors";

describe("When I submit form", () => {
    test("Then should calculate age", () => {
        const age = calculateAge(new Date());
        expect(age).toBe(0);
    });
});