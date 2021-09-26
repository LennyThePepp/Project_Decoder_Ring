// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  //alphabet array
  const alphabet = String.fromCharCode(...Array(123).keys()).slice(97)
  //handles shifts past the end of the alphabet
  const alphabetWrap = [...alphabet,...alphabet,...alphabet]

  function caesar(input, shift, encode = true) {
    //handles shifts that are not applicable
    if(shift === 0 || !shift || shift < -25 || shift > 25) return false
    //inverts the shift value
    if(encode === false) shift = shift * -1
    let codedArr = []
    input = input.toLowerCase()
    for(let i = 0;i < input.length;i++){
      //finding index of each input letter
      let shiftedLetterIndex = alphabet.indexOf(input[i])
      //handling spaces and non letter characters
        if (!alphabet.includes(input[i])){
          codedArr.push (input[i])
        }else{
          //finds shifted character regardless of potential wrapping shift value
          codedArr.push (alphabetWrap[shiftedLetterIndex+26+shift])
        }
    }
    //joins all characters in array as a string 
    return codedArr.join("")
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
