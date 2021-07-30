const string = "hello i am kushal";
const stringArray = string.split(' ');
console.log(stringArray);
console.log(stringArray[2]);

function filter(...bannedWords) {
    console.log(bannedWords.length);
}
"this is good to filter".filter("is");