function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  if (person.city === "Manchester")
    return true;
  else
    return false;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  let peopleInOneBus = 40;
  let NumberOfBuses = 1;

  if (people > 40)
    NumberOfBuses = people/peopleInOneBus;
  return Math.ceil(NumberOfBuses);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  let farmAnimal = "sheep";
  let count = 0;
  for (let i = 0; i < arr.length ; i++) {
    if (arr[i] === farmAnimal)
    count +=1;
  }
  return count;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  if (person.address.postCode.charAt(0) === "M" && person.address.city === "Manchester" )
    return true;
  else
    return false;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
