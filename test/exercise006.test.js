const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
  } = require("../challenges/exercise006");
  
  describe("sumMultiples", () => {
    test("return the sum of any numbers which are a multiple of 3 or 5", () => {
      const arr = [0,2,3,5];
      expect(sumMultiples(arr)).toBe(8);
      });
    test("return 0 if the array is empty", () => {
      const arr = [];
      expect(sumMultiples(arr)).toBe(0);
      });
    test("if any number is multiple of both 3 and 5, count it only one time", () => {
      const arr = [15,3];
      expect(sumMultiples(arr)).toBe(18);
      });
    });
  
  describe("isValidDNA", () => {
    test("receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.", () => {
    const str = "AGCCAT";
      expect(isValidDNA(str)).toBe(true);
    });
  
    test("receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.", () => {
    const str = "AGCNCAT";
      expect(isValidDNA(str)).toBe(false);
    });
  
  });
  
  describe("getComplementaryDNA", () => {
    /* This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC" */
     test("T always pairs with A, and C always pairs with G", () => {
      const str = "AGCCA";
      expect(getComplementaryDNA(str)).toBe("TCGGT");
  
    });
  
     test("If not a valid input DNA string, return no output", () => {
     const str = "TAGCTAGCBC";
      expect(getComplementaryDNA(str)).toBe();
  
    });
  });
  
  describe("isItPrime", () => {
    test("return true if input number is a prime number", () => {
      const n = 7;
      expect(isItPrime(n)).toBe(true);
    });
  
    test("return false if input number is a not prime number t", () => {
      const n = 6;
      expect(isItPrime(n)).toBe(false);
    });
  
    test("return true if input number is 1", () => {
      const n = 1;
      expect(isItPrime(n)).toBe(true);
    });
  
    test("return true if input number is 0", () => {
      const n = 0;
      expect(isItPrime(n)).toBe(true);
    });
  
  });
  
  describe("createMatrix", () => {
    test("return an array of n arrays, each filled with n items", () => {
    const n =2;
     const fill = "ABC";
     expect(createMatrix(n,fill)).toEqual([ [ 'ABC', 'ABC' ], [ 'ABC', 'ABC' ] ]);
    });
  
     test("return an array of 1, filled with 1 item if n is 1", () => {
     const n =1;
     const fill = "XZ";
     expect(createMatrix(n,fill)).toEqual([ [ 'XZ' ] ]);
    });
  
    test("return an array of 3 arrays, each filled with no item", () => {
    const n =3;
    const fill = "";
     expect(createMatrix(n,fill)).toEqual([ [ '', '', '' ], [ '', '', '' ], [ '', '', '' ] ]);
    });
  
    test("return an array of 3 arrays, each filled with no item", () => {
     const n =0;
     const fill = "A";
     expect(createMatrix(n,fill)).toEqual([]);
    });
  
  });
  
  
  describe("areWeCovered", () => {
    test("return true if there are enough staff scheduled for the given day", () => {
     const staff = [
     { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
     { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
     { name: "Suk", rota: ["Monday", "Tuesday", "Friday"] },
     { name: "Peter", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
     { name: "Sam", rota: ["Monday", "Tuesday", "Friday"] },
     { name: "Dheer", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
    ]
    const day = "Monday";
      expect(areWeCovered(staff, day)).toBe(true);
    });
  
    test("return false if there are not enough staff scheduled for the given day", () => {
      const staff = [
     { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
     { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
     { name: "Suk", rota: ["Monday", "Tuesday", "Friday"] },
     { name: "Peter", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
     { name: "Sam", rota: ["Monday", "Tuesday", "Friday"] },
     { name: "Dheer", rota: ["Saturday", "Tuesday", "Wednesday"] },
    ]
  const day = "Sunday";
      expect(areWeCovered(staff, day)).toBe(false);
    });
  
  });
  