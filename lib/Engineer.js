// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./lib/Employee");

class Engineer extends Employee {
    constructor(name, ID, email, GitHub) {
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.GitHub = GitHub;
    }
    printInfo() {
        console.log(`The engineer's name is: ${this.managerName}`);
        console.log(`The engineer's ID is: ${this.ID}`);
        console.log(`The engineer's email is: ${this.email}`)
        console.log(`The engineer's GitHub is: ${this.GitHub}`)
    }
}

console.log('Engineer');
Engineer.printInfo();



module.exports = Engineer;