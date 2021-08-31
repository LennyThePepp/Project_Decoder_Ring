const expect = require("chai").expect;
const substitution = require("../src/substitution").substitution;

describe ("substitution",()=>{
   it("should return false if duplicate characters in substitution alphabet",() =>{
    const input = "puppy girl!"
    const alphabet = "xoyqmcgrukswaflnthdjpzibevx"
    const expected = false
    const actual = substitution(input,alphabet)
    expect(actual).to.be.false
  })
   it("should return false if alphabet length is more than 26 characters",() =>{
    const input = "puppy girl!"
    const alphabet = "xoyqmcgrukswaflgthdjpzibev"
    const expected = false
    const actual = substitution(input,alphabet)
    expect(actual).to.be.false
  })
  it("should convert input characters into given alphabet characters while maintaining spaces and unique characters",() =>{
    const input = "puppy girl!"
    const alphabet = "xoyqmcgrukswaflnthdjpzibev"
    const expected = "npnne guhw!"
    const actual = substitution(input,alphabet)
    expect(actual).to.eql(expected)
  })
  it("should decode cipher into traditional alphabet characters",() =>{
    const input = "npnne guhw"
    const alphabet = "xoyqmcgrukswaflnthdjpzibev"
    const encode = false
    const expected = "puppy girl"
    const actual = substitution(input,alphabet,encode)
    expect(actual).to.eql(expected)
  })
})