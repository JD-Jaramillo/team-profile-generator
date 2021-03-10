// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./lib/Employee");

class Intern extends Employee {
    constructor(name, ID, email, school) {
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.school = school;
    }
    printInfo() {
        console.log(`The intern's name is: ${this.managerName}`);
        console.log(`The intern's ID is: ${this.ID}`);
        console.log(`The intern's email is: ${this.email}`)
        console.log(`The intern's school is: ${this.officeNum}`)
    }
}

console.log('Intern');
Intern.printInfo();



module.exports = Intern;