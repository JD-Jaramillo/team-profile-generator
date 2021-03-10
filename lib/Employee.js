// TODO: Write code to define and export the Employee class
// I am prompted to enter the team manager’s name, employee ID, email address, and office number
class Employee {
    constructor(managerName, ID, email, officeNum) {
        this.managerName = managerName;
        this.ID = ID;
        this.email = email;
        this.officeNum = officeNum;
    }
}

printInfo(); {
    console.log(`The team manager's name is: ${this.managerName}`);
    console.log(`The team manager's ID is: ${this.ID}`);
    console.log(`The team manager's email is: ${this.email}`);
    console.log(`The team manager's office number is: ${this.officeNum}`);
}

module.exports = Employee;
