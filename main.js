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
console.log("kata?");
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






