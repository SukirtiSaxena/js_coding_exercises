  function findSmallNums(nums) {
    if (!nums) throw new Error("nums is required");
    let smallNums = [];
    nums.forEach((num) => {
      if (num < 1) 
        smallNums.push(num);
    });
    return smallNums;
  }

  function findNamesBeginningWith(names, char) {
    if (!names) throw new Error("names is required");
    if (!char) throw new Error("char is required");
    let NamesBeginningWithChar = [];
    names.forEach((name) => {
      if (name.charAt(0) === char)
         NamesBeginningWithChar.push(name);
    });
    return NamesBeginningWithChar;
  }

  function findVerbs(words) {
    if (!words) throw new Error("words is required");
    let verbs = [];
    words.forEach((word) => {
      if (word.slice(0,2) === "to" && word.slice(2,3) === " ")
        verbs.push(word);
    });
    return verbs ;
  }

  function getIntegers(nums) {
    if (!nums) throw new Error("nums is required");
    let integer = [];
    nums.forEach((num) => {
      if (Number.isInteger(num))
        integer.push(num);
    });
    return integer;
  }

  function getCities(users) {
    if (!users) throw new Error("users is required");
    let cityNames =[];
    for (let i = 0;i<users.length;cityNames.push(users[i++].data.city.displayName));
    return cityNames;
  }

  function getSquareRoots(nums) {
    if (!nums) throw new Error("nums is required");
    let squareRoot =[];
    for (let i = 0;i<nums.length; squareRoot.push(Math.round((Math.sqrt(nums[i++])) * 100)/100 ));
    return squareRoot;
  }

  function findSentencesContaining(sentences, str) {
    if (!sentences) throw new Error("sentences is required");
    if (!str) throw new Error("str is required");
    str = str.toLowerCase();
    let sentencesContainingStr = [];
    let strLength = str.length;
    for (let i = 0; i<sentences.length;i++){
      for(let j = 0; j <sentences[i].length;j++)
      if ((sentences[i].substr(j,strLength)).toLowerCase() === str)
        sentencesContainingStr.push(sentences[i]);
    }
    return sentencesContainingStr;
  }

  function getLongestSides(triangles) {
    if (!triangles) throw new Error("triangles is required");
    let longestSides = [];  
    for (let i = 0; i<triangles.length;longestSides.push(Math.max(...triangles[i++])));
    return longestSides;
  }

  module.exports = {
    findSmallNums,
    findNamesBeginningWith,
    findVerbs,
    getIntegers,
    getCities,
    getSquareRoots,
    findSentencesContaining,
    getLongestSides
  };
