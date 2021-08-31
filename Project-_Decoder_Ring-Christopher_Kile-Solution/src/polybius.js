// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
    let alphabet = {
  "a" : 11, "b" : 21, "c" : 31, "d" : 41, "e" : 51,
  "f" : 12, "g" : 22, "h" : 32, "i/j" : 42, "k" : 52,
  "l" : 13, "m" : 23, "n" : 33, "o" : 43, "p" : 53,
  "q" : 14, "r" : 24, "s" : 34, "t" : 44, "u" : 54,
  "v" : 15, "w" : 25, "x" : 35, "y" : 45, "z" : 55,
  " " : 00,
};
  

  function polybius(input, encode = true) {
    let codedString =""
    if(encode){
      for(let i=0; i<input.length; i++){
        if (input[i].includes("i") || input[i].includes("j")){
          //adds "i and j as one character to the coded output"
            codedString+=alphabet["i/j"];
        }else if (input[i] === " "){
          //adds spaces
            codedString+=input[i];
        }else{
            codedString+=alphabet[input[i]];
        }}
      }else{
        //handling spaces
        const space = input.replace(" ","00")
        //uneven string length
        if(space.length%2!==0)return false;
        let arr = space.match(/.{1,2}/g);
        //converting cipher back to letters
        arr.forEach(num => { 
        const letter = Object.keys(alphabet).find(key=> num == alphabet[key]);
        codedString += letter;
        });
      }
     return codedString
   
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
