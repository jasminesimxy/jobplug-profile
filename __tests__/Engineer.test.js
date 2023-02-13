const Engineer = require ("../lib/Engineer")

describe ("Engineer", () => {
    const newEngineer = new Engineer('James', 123, 'james@gmail.com', 'james123');

    it("should return a role of engineer", () => {
        expect(newEngineer.getRole()).toEqual('Engineer');
    })

    it('should return the engineers name', () => {
        expect(newEngineer.getName()).toEqual('James'); // look aat the toequal/to be list 
    })

    it('should return the engineers github', () => {
        expect(newEngineer.getGithub()).toEqual('james123'); // look aat the toequal/to be list 
    })

});