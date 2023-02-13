const Manager = require ("../lib/Manager")

describe ("Manager", () => {
    const newManager = new Manager('James', 123, 'james@gmail.com', 1234);

    it("should return an office number", () => {
        expect(newManager.getofficeNumber()).toEqual(1234);
    })

    it('should return the managers name', () => {
        expect(newManager.getName()).toEqual('James'); // look aat the toequal/to be list 
    })


});