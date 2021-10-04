// Create constructor 

// Input information from class read-me (name, id, email, ...etc)
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return 'Employee';
    }
};


// Export 

module.exports = Employee;