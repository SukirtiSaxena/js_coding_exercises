const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
	for (let i = 0; i<nums.length -1;i++)
		if (nums[i] === n)
			return nums[i+1];
	return null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
	let countZero = 0;
	let countOne = 0;
	  for (let i = 0; i < str.length; i++) {
	    if (str[i] === '0') 
 	     countZero++;
 	   else 
	     countOne++;
	  } 
	return {
		1: countOne,
	  0: countZero
	  };
	};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
	let reverseNum =  (parseFloat(n.toString().split('').reverse().join('')));
	return reverseNum * Math.sign(n);
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
	let totalSum = 0;
	for (let i=0;i<arrs.length;i++)
		for(let j = 0 ; j < arrs[i].length;j++)
			totalSum += arrs[i][j];
	return totalSum;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
	if (arr.length > 1) {
		let firstElement = arr[0];
		let arrLength = arr.length;
		let swapValue = arr[0];
		arr[0] = arr[arrLength - 1];
		arr[arrLength -1] = swapValue;
	}
	return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
	var values = Object.values(haystack);
	let haystackStr = (values.join('')).toLowerCase();

	if ((haystackStr.search(searchTerm.toLowerCase()) < 0))
		return false;
	else
		return true;
	};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
	str = str.replace(/[^a-zA-Z0-9 ]/g, '');
	str.toLowerCase();
	let words = str.split(" ");
	var countWords = {};

	for (var i = 0; i < words.length; i++) {
	   var word = words[i].toLowerCase();
	   if (word in countWords)
          {
          var count  = countWords[word];
          count ++;
          countWords[word]=count;
          }
      else
	    countWords[word]=1;
	}
	return countWords;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
