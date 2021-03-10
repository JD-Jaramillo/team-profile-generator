// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
    const officeNumber = new Manager(2);
    expect(officeNumber).toEqual(2);
});

test('getRole() should return "Manager"', () => {
    expect(getRole()).toEqual(Manager);
});

test("Can get office number via getOffice()", () => {

});
