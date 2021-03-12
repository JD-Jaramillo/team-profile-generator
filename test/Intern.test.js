// Starter file provided by Instructor (03/09/2021) AC

const Intern = require("../lib/Intern");
const intern = new Intern('Tom', 12, 'mike@gmail.com', 'UNCC');

test("Can set school via constructor", () => {
    expect(intern.school).toEqual('UNCC');
});

test("getRole() should return \"Intern\"", () => {
    expect(intern.getRole()).toEqual("Intern");
});

test("Can get school via getSchool()", () => {
    expect(intern.getSchool()).toEqual('UNCC');
});
