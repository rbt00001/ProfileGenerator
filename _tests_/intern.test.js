const Intern = require("../lib/intern")


test ("Employee role ", () => {
    const empTest = new Intern("Ben",100,"rbt00001@yahoo.com","001")
    expect(empTest.getRole()).toBe("Intern")
})
