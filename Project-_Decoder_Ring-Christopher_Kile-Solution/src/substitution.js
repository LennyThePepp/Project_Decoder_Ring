// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
 const abc = String.fromCharCode(...Array(123).keys()).slice(97)

  function substitution(input, alphabet, encode = true) {
    //returns quickly if alphabet doesn't exist or isn't the wrong length
    if( !alphabet || alphabet.length !== 26) return false
    let alphabetSplit = alphabet.split("")
    // returns false if characters are duplicated in cipher alphabet
    const duplicate = alphabetSplit.some((char, i) => alphabetSplit.indexOf(char) !== i);
      if(duplicate) return false;
    let code = []
    //sets input to lowercase 
    input = input.toLowerCase()
    if (encode){
    for (let i = 0;i < input.length;i++){
      //handles spaces and other characters
      if(!abc.includes(input[i])){
        code.push(input[i])
      }
      //finds the index of the input character
      let char = abc.indexOf(input[i])
      //finds the relative index character to the input
      let codeChar = alphabet[char]
      code.push(codeChar)
    }
      // the opposite of the above sequence 
    } else {
      for (let k = 0;k < input.length;k++){
         if(input[k]=== " "){
        code.push(input[k])
      }
        let codeChar = alphabet.indexOf(input[k])
        let char = abc[codeChar]
        code.push(char)
      }
    }
    return code.join("")
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
