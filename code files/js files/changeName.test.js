const changeName = require("./changeName");

describe("changeName function",()=>{
    test("Name change from giving to taking",()=>{
     expect(changeName("im giving interview")).toBe("im taking interview")
    })

    test("should return same if giving is not there",()=>{
        expect(changeName("im attending the interview")).toBe("im attending the interview")
    })
})


describe("testing",()=>{
    test("",()=>{
        expect(changeName("im attending ")).toBe("im giving")
    })
})