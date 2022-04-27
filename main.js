"use strict"
//vanilla JS
//Write a function that takes in a number and multiplies that number by 10
function multiplyByTen(number){
    return number * 10;
}
console.log(multiplyByTen(6));

//Write an arrow function that takes in a number and multiplies that number by 10
let multiplyByTenArrow = number => number * 10;

console.log(multiplyByTenArrow(6));

//vanilla JS
//write a function that takes in 2 numbers and returns the sum of those numbers
function addNums(a, b){
    return a + b;
}
console.log(addNums(3, 5));

//Write an arrow function that takes in 2 numbers and returns the sum of those numbers
let addNumsArrow = (a, b) => a + b;
console.log(addNumsArrow(3, 5));


//not an arrow function, just an interesting example
//write a function that will reverse a word if it's equal to or more than 5 characters, otherwise return the word normally
function spinWords(sentence){
    function reverse(s) {
        return s.split('').reverse().join('');
    }

    var words = sentence.split(" ");
    var strings = [];
    for (var i = 0; i < words.length; i++) {
        var word = words[i].toString();
        var backwards = reverse(word);

        if (word.length >= 5){
            strings.push(backwards);
        } else {
            strings.push(word);
        }
    }
    return strings.join(' ');
}

console.log(spinWords("Mary bobsleds when it snows"));



//write an arrow function to sum 2 numbers
let sum = (a, b) => {
    return a + b;
}

let sumB = (a, b) => a + b;

console.log(sum(7,3));    // 10
console.log(sumB(8, 4));  // 12


//write an arrow function to subtract 2 numbers
let subtract = (x, y) => {
    return x - y;
}

let subtractB = (x, y) => x - y;

console.log(subtract(10,7));   // 3
console.log(subtractB(12,8));  // 4

//write a function that takes in 2 numbers and returns their minimum (the smallest number), using Math.min
function min(a, b) {
    return Math.min(a, b);
}

//rewrite it as an arrow function
let min2 = (a, b) => Math.min(a,b);

console.log(min(-10, 10));  // -10
console.log(min(0, 10));    // 0
console.log(min(10, 150));   // 10

console.log(min2(-10, 10));  // -10
console.log(min2(0, 10));    // 0
console.log(min2(10, 150));   // 10


//zero is even, 1 is odd, for any other number N, its evenness is the same as N -2. Write a recursive function corresponding to this description
//return a boolean
function isEven(num) {
    if(num === 0) {
        return true;
    } else if(num === 1) {
        return false;
    } else if(num < 0) {
        return isEven(-num);  //to account for negative numbers, otherwise you'll get a callStack size error if you try to pass -1
    } else {
       return (isEven(num - 2));
    }
}




console.log(isEven(0));  //true
console.log(isEven(1));  //false
console.log(isEven(2));  //true
console.log(isEven(8));  //true
console.log(isEven(9));  //false
console.log(isEven(50));  //true
console.log(isEven(75));  //false
console.log(isEven(-1));  //false
console.log(isEven(-2));  //true