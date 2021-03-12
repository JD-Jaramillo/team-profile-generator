// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("../lib/Manager");

const manager = new Manager('Mike', 12, 'mike@gmail.com', 56);

test("Can set office number via constructor argument", () => {
    // const manager = new Manager('Mike', 12, 'mike@gmail.com', 56);
    expect(manager.officeNum).toEqual(56);
});

test('getRole() should return "Manager"', () => {
    expect(manager.getRole()).toEqual("Manager");
});

test("Can get office number via getOffice()", () => {
    expect(manager.getOfficeNum()).toEqual(56);
});
