// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./lib/Employee");

class Manager extends Employee {
    constructor(managerName, ID, email, officeNum) {
        super(managerName, ID, email, officeNum);

        const manager = new Manager(managerName)
        answers.managersName = managerName;

    }
    printInfo() {
        console.log(`The team manager's name is: ${this.managerName}`);
        console.log(`The team manager's ID is: ${this.ID}`);
        console.log(`The team manager's email is: ${this.email}`);
        console.log(`The team manager's office number is: ${this.officeNum}`);
    }
}

console.log('Team Manager');
Manager.printInfo();



module.exports = Manager;