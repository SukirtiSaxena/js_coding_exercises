const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error("nums is required");
	if (n === undefined) throw new Error("n is required");
	return (nums.indexOf(n) === nums.length - 1 || nums.indexOf(n) < 0 ? null : nums[nums.indexOf(n) + 1]);
};

const count1sand0s = str => {
	if (str === undefined) throw new Error("str is required");
	let count = 0;
	for (let i = 0; i < str.length; count += Number(str[i++]));
	return {
		1: count,
		0: str.length - count
	};
};

const reverseNumber = n => {
	if (n === undefined) throw new Error("n is required");
	return ((parseFloat(n.toString().split('').reverse().join(''))) * Math.sign(n));
};

const sumArrays = arrs => {
	if (arrs === undefined) throw new Error("arrs is required");
	return arrs.flat().reduce((a, b) => a + b);
};

const arrShift = arr => {
	if (arr === undefined) throw new Error("arr is required");
	if (arr.length > 1)
		[arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
	return arr;
};

const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error("haystack is required");
	if (searchTerm === undefined) throw new Error("searchTerm is required");
	return (((Object.values(haystack).join('')).toLowerCase().search(searchTerm.toLowerCase()) >= 0));
};

const getWordFrequencies = str => {
	if (str === undefined) throw new Error("str is required");
	let Count = {};
	for (let j of str.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().split(" "))
		Count[j] ? (Count[j] += 1) : (Count[j] = 1);
	return Count;
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