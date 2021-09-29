function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
	let smallNums = [];
	for (let i = 0; i< nums.length;i++)
		if (nums[i] < 1)
			smallNums.push(nums[i]);
	return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
	let NamesBeginningWithChar = [];
	for (let i = 0; i<names.length;i++)
		if (names[i].charAt(0) === char)
			NamesBeginningWithChar.push(names[i]);
	return NamesBeginningWithChar;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
	let verbs = [];
	for (i=0;i<words.length;i++)
		if (words[i].slice(0,2) === "to" && words[i].slice(2,3) === " ")
			verbs.push(words[i])
	return verbs ;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
	let integer = [];
	for (i=0;i<nums.length;i++)
		if (Number.isInteger(nums[i]))
			integer.push(nums[i]);
	return integer;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
	let cityNames =[];
	for (let i = 0;i<users.length;i++)
		cityNames.push(users[i].data.city.displayName);
	return cityNames;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
	let squareRoot =[];
	for (let i = 0;i<nums.length;i++)
		squareRoot.push(Math.round((Math.sqrt(nums[i])) * 100)/100 );
	return squareRoot;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
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
  // Your code here
  let longestSides = [];  
  for (let i = 0; i<triangles.length;i++)
        longestSides.push(Math.max(...triangles[i]));
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
