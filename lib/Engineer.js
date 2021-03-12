// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, ID, email, Github) {
        super(name, ID, email);
        this.Github = Github;
        this.title = "Engineer";
    }
    getGithub() {
        return this.Github;
    }
    getRole() {
        return this.title;
    }
}

module.exports = Engineer;

