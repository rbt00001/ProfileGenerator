const Manager = require("../lib/manager")


test ("Employee role ", () => {
    const empTest = new Manager("Ben",100,"rbt00001@yahoo.com","001")
    expect(empTest.getRole()).toBe("Manager")
})
