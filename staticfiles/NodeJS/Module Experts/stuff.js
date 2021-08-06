var sum = function (a, b) {
    return `The sum of two numbers is ${a + b}`;
};

var subtract = function (a, b) {
    return `The subtract of two numbers is ${a - b}`;
};

var multiply = function (a, b) {
    return `The multiply of two numbers is ${a * b}`;
};

var divide = function (a, b) {
    return `The divide of two numbers is ${a / b}`;
};

module.exports = {
    sum: sum,
    subtract: subtract,
    multiply: multiply,
    divide: divide
}