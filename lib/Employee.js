// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, role, ID, email) {
        this.name = name;
        this.role = role;
        this.ID = ID;
        this.email = email;
    }
}

const employee = new Employee();


module.exports = Employee;
