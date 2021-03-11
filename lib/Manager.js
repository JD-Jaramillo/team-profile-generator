// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, role, ID, email, officeNum) {
        super(name, role, ID, email);
        this.officeNum = officeNum;
    }
    printInfo() {
        console.log(`The team manager's name is: ${this.managerName}`);
        console.log(`The team manager's ID is: ${this.ID}`);
        console.log(`The team manager's email is: ${this.email}`);
        console.log(`The team manager's office number is: ${this.officeNum}`);
    }
}

const manager = new Manager();

console.log('Team Manager');
manager.printInfo();



module.exports = Manager;