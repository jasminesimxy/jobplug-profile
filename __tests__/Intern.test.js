const Intern = require("../lib/Intern")


describe ("Intern", () => {
    const newIntern = new Intern('James', 123, 'james@gmail.com', 'USC');

    it("should return the name of the school the intern attended", () => {
        expect(newIntern.getSchool()).toEqual('USC');
    })

    it("should return a role of intern", () => {
        expect(newIntern.getRole()).toEqual('Intern');
    })

});