const Employee = require ("../Employee");

describe ("Employee", () => {
    const newEmployee = new Employee('James', 123, 'james@gmail.com');

    it("should return a role of manager", () => {
        expect(newEmployee.getRole()).toEqual('Employee');
    })

    it('should return the employee\'s name', () => {
        expect(newEmployee.getName()).toEqual('James'); // look aat the toequal/to be list 
    })

});