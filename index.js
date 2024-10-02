
function utilMethods(){
// Reverse String
String.prototype.reverse = function () {
    let result = "";
    for (let char of this) {
      result = char + result;
    }
    return result;
  };
  
  //camelCase
  String.prototype.camelCase = function () {
    let res = "";
    let space = false;
    for (let char of this) {
      if (space) {
        res += char.toUpperCase();
        space = false;
      } else {
        if (char == " ") {
          space = true;
          continue;
        }
        res += char;
      }
    }
    return res;
  };
  
  //Palindrome
  String.prototype.isPalindrome = function() {
      return this+'' == this.reverse()
  }
  
  //strip symbols
  String.prototype.stripSymbol = function(){
      let str = this+'';
      return str.replace(/[^a-zA-Z0-9]/g, '');
  }
  
  //Generate random strings
  String.generateRandomString = function(length){
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
      let result = ''; 
      for (let i = 0; i < length; i++) { 
        const randomIndex = Math.floor(Math.random() * characters.length); 
        result += characters.charAt(randomIndex); 
      } 
      return result;
  }
  console.log('Util methods executed');
}

module.exports = utilMethods;