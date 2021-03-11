// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, role, ID, email, school) {
        super(name, role, ID, email);
        this.school = school;
    }
    // printInfo() {
    //     console.log(`The intern's name is: ${this.managerName}`);
    //     console.log(`The intern's ID is: ${this.ID}`);
    //     console.log(`The intern's email is: ${this.email}`)
    //     console.log(`The intern's school is: ${this.officeNum}`)
    // }
}

// console.log('Intern');
// intern.printInfo();



module.exports = Intern;