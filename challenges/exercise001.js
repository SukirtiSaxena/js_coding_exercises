// to test   > npm test test/exercise001.test.js

function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  let capitalWord = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalWord;
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
  let initials = firstName.charAt(0) +"."+ lastName.charAt(0); 
  return initials;
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  let finalPrice = originalPrice + (originalPrice * vatRate)/100;
  finalPrice = Math.round(finalPrice * 100) / 100;
  return finalPrice;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  let finalPrice = originalPrice - (originalPrice * reduction)/100;
  finalPrice = Math.round(finalPrice * 100) / 100;
  return finalPrice;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  let middleChar = 0;
  if ((str.length % 2) == 0 )
     middleChar = str.charAt((str.length/2) -1)+ str.charAt(str.length/2);
  else 
    middleChar = str.charAt(str.length/2);
  return middleChar;
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  var revStr = "";
  for (var i = word.length - 1; i >= 0; i--) 
      revStr += word[i];
  return revStr;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
  reverseWords = [];
  for (let i = 0; i< words.length; i++) {
       let revString = reverseWord(words[i]);
       reverseWords.push(revString);
  }
  return reverseWords;

}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  let count = 0;
  for (let i = 0; i < users.length ; i++) {
	  if (users[i].type === "Linux") {
		  count += 1;
	  }
  }
  return count;
	
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  let total = 0;
  let mean = 0;
  for(let i = 0; i < scores.length; i++) {
    total += scores[i];	
}
  mean = total / scores.length;
  mean = Math.round(mean * 100) / 100;
  return mean; 
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
  let output = '';
  if ((n % 3) == 0) 
     output += "fizz";
  if ((n % 5 ) == 0)		
     output += "buzz"
  if ((n % 3) !== 0 && (n % 5) !== 0)
     output = n;
    return output;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
