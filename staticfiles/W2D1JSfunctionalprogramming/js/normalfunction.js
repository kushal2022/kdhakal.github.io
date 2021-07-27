
/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

/* run and test for array which are equal or not*/
function myFunctionForArray(expected, found) {
    let flag = false;
    for (e in expected) {
        for (f in found) {
            if (expected[e] === found[f]) {
                flag = true;
            }
        }
        if (flag === false) {
            return "TEST FAILED.  Expected " + expected[e] + " found " + found[f];
        }
    }
    return "TEST SUCCEEDED";
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
    return a > b ? a : b;
}

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);
}

/*check for vowel*/
function isVowel(c) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let flag = false;
    for (const i in vowels) {
        if (vowels[i] === c) {
            flag = true;
        }
    }
    return flag;
}

/*sum of the arr*/
function sum(arr) {
    return arr.reduce((x, y) => x + y, 0);
}

/*multiplication of the arr*/
function mul(arr) {
    if(arr.length == 0) {
        return 0;
    }
    return arr.reduce((x, y) => x * y, 1);
}

/*string reverse*/
function reverseString(str) {
    return str.split("").reverse().join("");
}

/*find length of longest word*/
function findLongestWord(words) {
    return words.reduce((longest, w) => w.length > longest.length ? w : longest, "");
}

/*finding long words than given length*/
function findLongWords(words, length) {
    return words.filter(word => word.length > length).toString();
}



console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));


console.log("Excepted output of isVowel(a) is true  " + myFunctionTest(true, isVowel('a')));
console.log("Excepted output of isVowel(I) is true  " + myFunctionTest(true, isVowel('I')));

const arr = [1, 2, 3, 4];
console.log("Excepted output of sum(arr) is 10 " + myFunctionTest(10, sum(arr)));
console.log("Excepted output of mul(arr) is 24 " + myFunctionTest(24, mul(arr)));

console.log("Excepted output of reverseString(\"hello\") is olleh " + myFunctionTest('olleh', reverseString('hello')));

const strArray = ['dog', 'monkey', 'butterfly', 'cat'];
console.log("Excepted output of longestWord(strArray) is butterfly with wordLength 9 " + myFunctionTest(9, findLongestWord(strArray)));

let arrCheck = ['monkey', 'butterfly'];
console.log("Excepted output of findLongWords(strArray, 3) are arr[monkey, butterfly] " + myFunctionForArray(arrCheck, findLongWords(strArray, 3)));

console.assert(isVowel("A"), "Expected output of isVowel('A') is true ");
console.assert(10 === sum([1,2,3,4]),"Expected output of sum([1,2,3,4]) is 10 ");
console.assert(24 === mul([1,2,3,4]),"Expected output of multiply([1,2,3,4]) is 24");
console.assert("elppA" === reverseString("Apple"), "Expected output of strReverse('Apple') is elppA ");
console.assert(9 === findLongestWord(strArray),"Expected output of findLongestWord(['dog', 'monkey', 'butterfly', 'cat']) is 9");
