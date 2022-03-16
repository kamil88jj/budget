'use strict'

/* 
let ans = prompt("", ""),
    arr = [];

arr = ans.split(',');

console.log(arr);
 */


let arr = ["13", 1423, 1245, '125'],
    i = arr.sort( removed );

function removed (a,b) {
    return a-b;
}

console.log(arr);


var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
    return b - a
});
console.log(numbers); 




let soldier = {
    health: 400,
    armor: 100,
    fire1: 10,
    fire2: 20
};

let john = {
    health: 100
};

let max = {
    armor: 200
};

max.__proto__ = soldier;

john.__proto__ = soldier;

console.log(max.fire2);
console.log(john.fire1);