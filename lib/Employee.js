// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, ID, email) {
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.title = "Employee";
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.ID;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.title;
    }
}

module.exports = Employee;
