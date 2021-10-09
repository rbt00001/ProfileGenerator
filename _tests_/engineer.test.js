// require employee folder
const Engineer = require("../lib/employee")



test ("Employee gitHub", () => {
    const empTest = new Engineer("Ben",100,"rbt00001@yahoo.com","RBT00001")
    expect (empTest.github).toBe("RBT00001")
})
// does getRole() method return role "Employee"

test ("Employee role ", () => {
    const empTest = new Engineer("Ben",100,"rbt00001@yahoo.com","RBT00001")
    expect(empTest.getRole()).toBe("Engineer")
})


// when I create a new employee object, does this have a name, email, and ID that match created?

test("Employee Get Github method", () => {
    const empTest = new Engineer("Ben",100,"rbt00001@yahoo.com", "RBT00001")
    expect(empTest.getGithub()).toBe("RBT00001")
})

