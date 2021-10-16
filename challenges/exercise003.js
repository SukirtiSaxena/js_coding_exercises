  function getSquares(nums) {
    if (nums === undefined) throw new Error("nums is required");
    return nums.map(num => Math.pow(num, 2));
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
    people.forEach((person) =>
      count+= (person.subjects.length));
    return count;
  }

  function checkIngredients(menu, ingredient) {
    if (menu === undefined) throw new Error("menu is required");
    if (!ingredient) throw new Error("ingredient is required");
    let count = 0;
    menu.forEach((item)=>
      (item.ingredients.indexOf(ingredient)) >= 0 ? count++ : count);
    return count > 0;
  }

  function duplicateNumbers(arr1, arr2) {
    if (arr1 === undefined) throw new Error("arr1 is required");
    if (arr2 === undefined) throw new Error("arr2 is required");
    
    return [... new Set((arr1.filter(val =>  arr2.indexOf(val) != -1)).sort(function(a, b){return a-b}))];

  }

  module.exports = {
    getSquares,
    camelCaseWords,
    getTotalSubjects,
    checkIngredients,
    duplicateNumbers
  };