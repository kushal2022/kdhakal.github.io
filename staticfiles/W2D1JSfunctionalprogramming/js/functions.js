

describe("maxOfThreeax", function () {
    it("takes 3 numbers, and returns the maximum",
        function () {
            assert.equal(50, maxOfThree(10, 20, 50));
        });
});

describe("isVowel", function () {
    describe("when input is a one character vowel", function () {
        it("returns true",
            function() {
                assert.equal(true, isVowel('a'));
            });
    });

    describe("when input is a one character not vowel", function () {
        it("returns false",
            function() {
                assert.equal(false, isVowel('g'));
            });
    });
});

describe("sum", function () {
    describe("when given array has more then on element in it", function() {
        it("takes array of numbers, and returns the sumation",
            function () {
                assert.equal(24, sum([2, 4, 6, 12]));
            });
    });

    describe("when given array is empty", function() {
        it("returns 0",
            function () {
                assert.equal(0, sum([]));
            });
    });

});

describe("mul", function () {
    describe("when given array has more then on element in it", function() {
        it("takes array of numbers, and returns the multiplication",
            function () {
                assert.equal(48, mul([2, 4, 6, 1]));
            });
    });

    describe("when given array is empty", function() {
        it("returns 0",
            function () {
                assert.equal(0, mul([]));
            });
    });

});
describe("reverseString", function () {
    it("takes a string, and returns the reverse",
        function () {
            assert.equal("qwerty", reverseString("ytrewq"));
        });
});

describe("findLongestWord", function () {
    it("takes array of string, and returns the longest word",
        function () {
            assert.equal("testar", findLongestWord(["jag", "am", "testar"]));
        });
});

describe("findLongWords", function () {
    it("takes array of string, and a filter number, and returns words that length are greater than the input",
        function () {
            assert.equal("testar", findLongWords(["jag", "am", "testar"], 5));
        });
});
