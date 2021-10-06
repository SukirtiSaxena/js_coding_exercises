  function getSquares(nums) {
    if (nums === undefined) throw new Error("nums is required");
    let squareNum = [];
    for (let i = 0; i < nums.length;squareNum[i]=Math.pow(nums[i++], 2));
    return squareNum;
  }

  function camelCaseWords(words) {
    if (words === undefined) throw new Error("words is required");
    let camelCaseWord = words[0];
    for (let i = 1 ; i < words.length; (camelCaseWord +=  words[i].charAt(0).toUpperCase() + words[i].slice(1)) && i++);
    return camelCaseWord;
  }

  function getTotalSubjects(people) {
    if (people === undefined) throw new Error("people is required");
    let count = 0;
    people.forEach((person,index) =>
      count+= (people[index].subjects.length));
    return count;
  }


  function checkIngredients(menu, ingredient) {
    if (menu === undefined) throw new Error("menu is required");
    if (!ingredient) throw new Error("ingredient is required");
    let count = 0;
    menu.forEach((item,index)=>
      (menu[index].ingredients.indexOf(ingredient)) >= 0 ? count++ : count);
    return count > 0;
  }

  function duplicateNumbers(arr1, arr2) {
    if (arr1 === undefined) throw new Error("arr1 is required");
    if (arr2 === undefined) throw new Error("arr2 is required");
    let arr3 = [];  
    for (let i = 0; i < arr1.length;i++)
      for (let j = 0; j < arr2.length; (arr1[i] === arr2[j++]) &&  arr3.push(arr1[i])) ;
    return [...new Set(arr3)].sort();
  }

  module.exports = {
    getSquares,
    camelCaseWords,
    getTotalSubjects,
    checkIngredients,
    duplicateNumbers
  };