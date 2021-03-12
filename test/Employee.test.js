// Starter file provided by Instructor (03/09/2021) AC

const Employee = require("../lib/Employee");

const employee = new Employee('Tom', 12, 'mike@gmail.com');

test("Can instantiate Employee instance", () => {
    expect(employee instanceof Employee).toEqual(true);
});

test("Can set name via constructor arguments", () => {
    expect(employee.name).toEqual('Tom');
});

test("Can set id via constructor argument", () => {
    expect(employee.ID).toEqual(12);
});

test("Can set email via constructor argument", () => {
    expect(employee.email).toEqual('mike@gmail.com');
});

test("Can get name via getName()", () => {
    expect(employee.getName()).toEqual('Tom');
});

test("Can get id via getId()", () => {
    expect(employee.getId()).toEqual(12);
});

test("Can get email via getEmail()", () => {
    expect(employee.getEmail()).toEqual('mike@gmail.com');
});

test("getRole() should return \"Employee\"", () => {
    expect(employee.getRole()).toEqual("Employee");
});
