// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, ID, email, officeNum) {
        super(name, ID, email);
        this.officeNum = officeNum;
        this.title = "Manager";
    }

    getOfficeNum() {
        return this.officeNum;
    }

    getRole() {
        return this.title;
    }
}


module.exports = Manager;