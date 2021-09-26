const expect = require("chai").expect;
const caesar = require("../src/caesar").caesar;

describe ("caesar",()=>{
  it("should return false if shift is less than -25",() =>{
    const input = "Pup"
    const shift = -690
    const expected = false
    const actual = caesar(input,shift)
    expect(actual).to.be.false
  })
  it("should encode by shift maintain spaces, special symbols and ignore capital letters",() =>{
    const input = "God is Pup!"
    const shift = 5
    const expected = "lti nx uzu!"
    const actual = caesar(input,shift)
    expect(actual).to.include(expected)
  })
  it("should decode input by same parameters if encode = false",() =>{
    const input = "uzu"
    const shift = 5
    const encode = false
    const expected = "pup"
    const actual = caesar(input,shift, encode)
    expect(actual).to.eql(expected)
  })
})