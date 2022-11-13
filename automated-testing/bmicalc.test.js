
const getBMI = require("./bmi_calculator")

test("Checks if BMI is correct", () => {
    expect(getBMI(154, 64)).toBe(26.43);
    }
);