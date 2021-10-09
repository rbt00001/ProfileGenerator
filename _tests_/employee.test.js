// require employee folder
const Employee = require("../lib/employee")

// employee class 
test ("does name = name? ", () => {
    const empTest = new Employee()
    expect(typeof(empTest)).toBe("object")
}

)

test ("Employee ", () => {
    const empTest = new Employee("Ben")
    expect (empTest.name).toBe("Ben")
})
// does getRole() method return role "Employee"

test ("Employee ID ", () => {
    const empTest = new Employee("Ben",100)
    expect(empTest.id).toBe(100)
})


test ("Employee Email", () => {
    const empTest = new Employee("Ben",100,"rbt00001@yahoo.com")
    expect(empTest.email).toBe("rbt00001@yahoo.com")
})
// when I create a new employee object, does this have a name, email, and ID that match created?

test("Employee getNAme method", () => {
    const empTest = new Employee("Ben",100,"rbt00001@yahoo.com")
    expect(empTest.getName()).toBe("Ben")
})


test("Employee getNID method", () => {
    const empTest = new Employee("Ben",100,"rbt00001@yahoo.com")
    expect(empTest.getID()).toBe(100)
})

test("Employee getEmail method", () => {
    const empTest = new Employee("Ben",100,"rbt00001@yahoo.com")
    expect(empTest.getEmail()).toBe("rbt00001@yahoo.com")
})
test("Employee getRole method", () => {
    const empTest = new Employee("Ben",100,"rbt00001@yahoo.com")
    expect(empTest.getRole()).toBe("Employee")
})