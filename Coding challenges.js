//Exercitiul 1
const schedule = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(schedule);

//Exercitiul 2
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) console.log(i);
}


//Exercitiul 3

//creating a multiplication table
for (let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * 7;

    // display the result
    console.log(`${7} * ${i} = ${result}`);
}

//Exercitiul 4
var a = 10;
var b = 10;

for (var x = 1; x <= a; x++) {
    if (x > 1) {
        var y = 2;
        while (y <= b) {
            var count = 0;
            count = x * y;
            console.log(x + " * " + y + " = " + count + "; ");
            y++;
        }
        console.log();

    } else {
        var y = 1;
        while (y <= b) {
            var count = 0;
            count = x * y;
            console.log(x + " * " + y + " = " + count + "; ");
            y++;
        }
        console.log();
    }
}

//Exercitiul 5
var result = 0;
for (let j = 1; j <= 10; j++) {

    // multiply i with number
    result = j + result;

    // display the result
    console.log(result);
}

//Exercitiul 6
let factorial = 10;
let total = 1;

for (i = 0; i < factorial; i++) {
    total = total * (factorial - i);
}
console.log(total);

//Exercitiul 7
let num = 11;
const num1 = [];

do {
    num1.push(num);
    num += 2;
} while (num1.length < ((30 - 10) / 2));

console.log(num1.reduce((a, b) => a + b));

//Exercitiul 8
const randomArray = [3, 20, 76, 80];
console.log(randomArray.reduce((a, b) => a + b));

//Exercitiul 9
const element = [10, 4, 19, 98];

const elementAverage = element.reduce((a, b) => a + b) / element.length;

console.log(elementAverage);

//Exercitiul 10
const Numbers = [2, -10, 5, -7, 16, -20, 3];

const positiveNumbers = Numbers.filter(number => number >= 0);

console.log(positiveNumbers);

//Exercitiul 11 Find the maximum number in an array of numbers
const number = [34, 6, 8, 30, -16, 10, 5];
let m = Math.max.apply(null, number);

console.log(m);

//Exercitiul 12 Create a function that will return a Boolean specifying if a number is prime

function primeNumber(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0 && n > 1) {
            return false;
        }
    }
    return true;
};
console.log(primeNumber(2));
console.log(primeNumber(10));
console.log(primeNumber(30));


//Exercitiul 13 Calculate the sum of digits of a positive integer number
const digits = (digit) => {
    result = 0;
    while (digit != 0) {
        result = result + digit % 10;
        digit = parseInt(digit / 10);
    }
    return result;
};
console.log(digits(10));
console.log(digits(25));
console.log(digits(150));
console.log(digits(1990));

//Exercitiul 14 Print the first 100 prime numbers
for (let i = 0; i <= 100; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag === 0) {
        console.log(i);
    }
}

//Exercitiul 15 Rotate an array to the left 1 position
let rotateArray = [1, 2, 3, 4, 5, ],
    n = rotateArray.length;

while (n--) {
    console.log(rotateArray.join(' '));
    rotateArray.unshift(rotateArray.pop());
}
console.log(rotateArray.join(' '));

//Exercitiul 16 Reverse an array
const numarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numarray.reverse());

//Exercitiul 17 Create a function that will merge two arrays and return the result as a new array
let summer = ["June", "July", "August"];
let whinter = ["December", "January", "February"];
let seasons = summer.concat(whinter);
console.log(seasons);

//Exercitiul 18 Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
const coincidence = (firtsResults, secondResults) => {

    const mergedResults = firtsResults.concat(secondResults);

    const coincidences = mergedResults.filter(element => !firtsResults.includes(element) || !secondResults.includes(element));
    return coincidences;
};
const array1 = [1, 20, 56, 4, 15];
const array2 = [1, 3, 99, 4, 8, ];
console.log(coincidence(array1, array2));

//Exercitiul 19 Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
const basicnumber = [34, 1, 67, 90, 0, 787, 2, 78, 49];
const distincts = basicnumber.filter((element, index, array) => array.indexOf(element) === index);
console.log(distincts);

//Exercitiul 20  Create a function that will return the number of words in a text
const wordCounter = (str) => {
    return str.match(/(\w+)/g).length;
};

const word = 'I love my job.';

console.log(wordCounter(word));