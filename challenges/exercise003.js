function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  let squareNum = [];
  for (let i = 0; i < nums.length;i++) 
	  squareNum[i] = nums[i] * nums[i];
  return squareNum;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  let camelCaseWord = words[0];
  for (let i = 1 ; i < words.length;i++) 
	  camelCaseWord +=  words[i].charAt(0).toUpperCase() + words[i].slice(1);
  return camelCaseWord;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  let count = 0;
  for (let i = 0; i < people.length;i++)
  	for (let j = 0; j <(people[i].subjects.length);j++)
	  	count += 1;	
  return count;
}


function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
  for (let i = 0; i < menu.length;i++){
    for (let j = 0; j <(menu[i].ingredients.length);j++)
      if (menu[i].ingredients[j] === ingredient)
        return true ;
  }
  return false;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
  let arr3 = [];  
  for (let i = 0; i < arr1.length;i++)
	  for (let j = 0; j < arr2.length; j++)
		  if (arr1[i] === arr2[j])
			  arr3.push(arr1[i]);
  let removeDuplicates = [...new Set(arr3)];
  removeDuplicates.sort();
  return removeDuplicates;
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
