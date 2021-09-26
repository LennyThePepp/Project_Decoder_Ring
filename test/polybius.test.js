const expect = require("chai").expect;
const polybius = require("../src/polybius").polybius;

describe ("polybius",()=>{
  it("should convert input into a relative number based, convert both i and j to 42 and maintain spaces",() =>{
    const input = "puppy junk"
    const expected = "5354535345 42543352"
    const actual = polybius(input)
    expect(actual).to.eql(expected)
  })
   it("should decode number input into letters with the same stipulations as encoding",() =>{
    const input = "5354535345 42543352"
    const expected = "puppy i/junk"
    const encode = false
    const actual = polybius(input, encode)
    expect(actual).to.eql(expected)
  })
})
