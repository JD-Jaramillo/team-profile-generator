// Starter file provided by Instructor (03/09/2021) AC

const Engineer = require("../lib/Engineer");

const engineer = new Engineer('Tom', 12, 'mike@gmail.com', 'mike-Github');

test("Can set GitHUb account via constructor", () => {
    expect(engineer.Github).toEqual('mike-Github');
});

test("getRole() should return \"Engineer\"", () => {
    expect(engineer.getRole()).toEqual("Engineer");
});

test("Can get GitHub username via getGithub()", () => {
    expect(engineer.getGithub()).toEqual('mike-Github');
});
