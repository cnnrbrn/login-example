import { validateEmail } from "./validateEmail.js";

describe("validateEmail", () => {
	it("should return true for a valid email address", () => {
		expect(validateEmail("test@test.com")).toEqual(true);
	});

	it("should return false for an invalid email address", () => {
		expect(validateEmail("test")).toEqual(false);
	});
});
