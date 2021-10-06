  function getFillings(sandwich) {
    if (sandwich === undefined) throw new Error("ingredients is required");
    return sandwich.fillings;
  }

  function isFromManchester(person) {
    if (person === undefined) throw new Error("person is required");
    return (person.city === "Manchester");
  }

  function getBusNumbers(people) {
    if (people === undefined) throw new Error("people is required");
    let peopleInOneBus = 40;
    return Math.ceil(people/peopleInOneBus);
  }

  function countSheep(arr) {
    if (arr === undefined) throw new Error("arr is required");
    let farmAnimal = "sheep";
    let count = 0;
    for (let i = 0; i < arr.length ; count += Number((arr[i++] === farmAnimal)));
    return count;
  }

  function hasMPostCode(person) {
    if (person === undefined) throw new Error("person is required");
    return person.address.postCode.charAt(0) === "M" && person.address.city === "Manchester" ;
  }

  module.exports = {
    getFillings,
    isFromManchester,
    countSheep,
    getBusNumbers,
    hasMPostCode
  };
