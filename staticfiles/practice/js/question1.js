// const add = (function () {
//     var counter = 0;
//
//     function add() {
//         counter += 1;
//     }
//     function reset() {
//         counter = 0;
//     }
//     function addition() {
//         add();
//     }
//     function resetting() {
//         reset();
//
//     }
//     return {
//         addition: addition,
//         resetting: resetting,
//         value: function () {
//             return counter;
//         }
//     }
// })();
// add.addition();
// add.addition();
// console.log(count.value());
// add.resetting();
// add.addition();
// console.log(count.value());
//
// /*
// counter is a free variable in questions1.
// Free variables are simply the
// variables that are neither locally
// declared nor passed as parameter.
// all the global variables are free variables but not
// all the free variables are not global.*/
//
const count = (function () {
    var counter = 0;

    function add(inc) {
        counter += inc;
        return counter;
    }
    function reset() {
        counter = 0;
    }
    function addition(inc) {
        return function (){
            return add(inc);
        }
    }
    function resetting() {
        reset();
    }
    function value() {
        return counter;
    }

    return {
        addition: addition,
        resetting: resetting,
        value: function () {
            return value();
        }
    }
})();
var make_adder = count.addition.bind(count);
var add5 = make_adder(5);
add5();
add5();
console.log(add5());


var add7 = make_adder(7);
add7();
add7();
console.log(add7());
// //
// var make_adder = (
//     function() {
//         return function(inc) {
//             var counter = 0;
//             var add = function() {
//                 return counter = counter+inc;
//             };
//             return add;
//         }
//     }
// )();
// var add5 = make_adder(5);
// add5();
// add5();
// console.log(add5());
// var add7 = make_adder(7);
// add7();
// add7();
// console.log(add7());

/*
using module to separate the function and variable name from global space
module helps to maintain the code easily, namespacing (variables outside
the scope of a top-level function are global (meaning, everyone can access them).
Because of this, it’s common to have “namespace pollution”, where completely
unrelated code shares global variables.) and reusability.
*/

const employee = (function () {
    var name;
    var age;
    var salary;

    function getName() {
        return name;
    }
    function getAge() {
        return age;
    }
    function getSalary() {
        return salary;
    }
    function setName(name1) {
        name = name1;
    }
    function setAge(age1) {
        age = age1;
    }
    function setSalary(salary1) {
        salary = salary1;
    }
    function increaseSalary(percentage) {
        return getSalary() * (1 + percentage / 100);
    }
    function increaseAge(inc) {
        return getAge() + inc;
    }

    return {
        setName: setName,
        setAge: setAge,
        setSalary: setSalary,
        increaseSalary: increaseSalary,
        increaseAge: increaseAge
    }
})();
employee.setName("kushal");
employee.setAge(20);
employee.setSalary(400000);
console.log(employee.increaseSalary(50));
console.log(employee.increaseAge(5));

employee.extension = (function () {
    var address;
    function getAddress() {
        return address;
    }
    function setAddress(address1) {
        address = address1;
    }

    return {
        setAddress: setAddress,
        getAddress: getAddress
    }
}).apply(employee);

employee.extension.setAddress("FairField Iowa");
console.log(employee.extension.getAddress());

