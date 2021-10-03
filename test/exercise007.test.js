const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
    } = require("../challenges/exercise007");
    
    describe("sumDigits", () => {
      test("returns the sum of all its digits", () => {
        const n = 1234;
        expect(sumDigits(n)).toBe(10);
      });
      test("returns the sum of all its digits", () => {
        const n = 0;
        expect(sumDigits(n)).toBe(0);
      });
      test("returns the sum of all its digits", () => {
        const n = 1;
        expect(sumDigits(n)).toBe(1);
      });
    });
    
    describe("createRange", () => {
      test("a range of numbers as an array from start number till end number with a gap of step number", () => {
        const start = 3;
        const end =11;
        const step = 2;
        expect(createRange(start, end, step)).toEqual([3, 5, 7, 9, 11]);
      });
    
      test("a range of numbers as an array", () => {
        const start = 0;
        const end = 0;
        const step = 1;
        expect(createRange(start, end, step)).toEqual([0]);
      });
  
      test("a range of numbers as an array", () => {
        const start = 3;
        const end = 5;
        const step = 0;
        expect(createRange(start, end, step)).toBe("Step should be greater than 0");
      });
    
    });
    
    describe("getScreentimeAlertList", () => {
      test("an array of user objects and their usage in minutes of various applications", () => {
        const users =[
            {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                   ]
            },
            {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                   ]
            }
        ];
        const date = "2019-05-04";
        expect(getScreentimeAlertList(users, date)).toEqual([ 'Beth Smith' ]);
       });
    
      test("an array of user objects and their usage in minutes of various applications", () => {
        const users =[
            {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                   ]
            },
            {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                    ]
            }
        ];
        const date = "2019-05-03";
        expect(getScreentimeAlertList(users, date)).toEqual([]);  
      });  

    });
    
    describe("hexToRGB", () => {
        test("return rgb value of Hex colour code", () => {
            const hexStr = "#FF1133";
            expect(hexToRGB(hexStr)).toEqual("rgb(255,17,51)");
        });
    
        test("return nothing if input is not Hex colour code", () => {
            const hexStr = "ABC";
            expect(hexToRGB(hexStr)).toBe("");
      });
    
        test("return rgb value of Hex colour code", () => {
            const hexStr = "#AA3464";
            expect(hexToRGB(hexStr)).toEqual("rgb(170,52,100)");
        });

    });
    
    describe("findWinner", () => {
        test(" return X if player X has won, 0 if the player 0 has won", () => {
            const board =   [
                ["X", "0", null],
                ["X", null, "0"],
                ["X", null, "0"]
                ];
            expect(findWinner(board)).toBe("X");
         });
    
        test(" return X if player X has won, 0 if the player 0 has won", () => {
            const board =   [
                ["X", "0", "0"],
                ["0", null, "0"],
                ["X", null, "0"]
                ];
            expect(findWinner(board)).toBe("0");
        });
    
        test(" return X if player X has won, 0 if the player 0 has won", () => {
            const board =   [
                ["X", "0", "X"],
                ["0", null, "0"],
                ["X", null, "0"]
                ];
            expect(findWinner(board)).toBe("Null");
        });
    
    });
    